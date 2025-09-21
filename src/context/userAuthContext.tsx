/*Aqui vamos a crear el contexto para la pagina del login  */
/*Este código crea un sistema de autenticación para una aplicación web usando React y Firebase. Centraliza la lógica de inicio y cierre de sesión para que la información del usuario esté disponible en toda la aplicación de manera sencilla. */

import type Signup from '@/pages/singup/singup';
/*Importamos funciones claves e Firebase para la autenticación*/
import {
  GoogleAuthProvider, /*Permite autenticar a los usuarios con google */
  createUserWithEmailAndPassword, /*La función que envía una solicitud a Firebase para crear una cuenta nueva con email y contraseña.*/
  onAuthStateChanged, /* Esta es muy importante. Es un "escuchador" que se activa automáticamente cada vez que el estado de autenticación del usuario cambia (por ejemplo, cuando inicia o cierra sesión).*/
  signInWithEmailAndPassword, /*Inicia sesión con credenciales de email y contraseña.*/
  signInWithPopup,/*Muestra una ventana emergente para que el usuario inicie sesión, como en el caso de Google*/
  signOut,/*Cierra sesion del usuario */
} from 'firebase/auth';
/***import { auth }**: Importa el objeto de autenticación de Firebase que configuraste en otro archivo (firebaseConfig`). Este objeto es la conexión a tu proyecto de Firebase.*/
import { auth } from '../firebaseConfig';
import type { LogOut } from 'lucide-react';
/*Estos son los hooks de React que permiten que este componente de función tenga estado (useState) y se ejecute en momentos específicos (useEffect). También se usa createContext para crear el "almacén" y useContext para acceder a él. */
import { useContext, useEffect,createContext } from 'react'; /*Hooks de react */
import type { User } from 'firebase/auth';


/*Un tipo de TypeScript que define que el componente que va a "proveer" el contexto recibirá una propiedad children, que es básicamente todo lo que va dentro de él.*/
interface IUserAuthProviderProps {
  children: React.ReactNode;
}

/*Define la forma de los datos que estarán disponibles para todos los componentes. Incluye el objeto user (el usuario actual) y las funciones para la autenticación.*/
type AuthContextData = {
  /*Estas son las funciones que encapsulan las llamadas de Firebase. Se crean aquí una sola vez. Simplemente reciben los parámetros necesarios (email, contraseña) y llaman a su respectiva función de Firebase.*/
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof Signup;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

/*Aqui creamos las funciones de autentificacion*/
/*Esta es la funcion flecha que envuelve la funcion signInWithEmailAndPassword de Firebase
recibe un email y una contraseña y usa el objeto auth para intentar iniciar sesion */
const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/*Funcion simple que llama a signOut(auth) de Firebase para cerrar la sesion del usuario actual  */
const logOut = () => {
  signOut(auth);
};

/*Esta funcion flecha envuelve createUserWithEmailAndPassword para crear un nuevo usuario en Firebase  */
const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/*Esta funcion crea una instancia del proveedor de autentificacion de google y luego usa signInWithPopup para mostrar el pop-up de google y autentircar el usuario  */
const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};


/*Aquí se crea el Contexto de React y se exporta. Es como si crearas una caja vacía (createContext) y le dieras un nombre (userAuthContext). La inicializas con valores nulos o por defecto para que no falle si no tiene un proveedor.*/
export const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

/*COMPONENTE PRINCIPAL (EL PROVEEDOR) */
/*Este es el corazón de la magia. Es un componente que envuelve a otros componentes y les "provee" el contexto. */
export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {

  /* Declara un estado local dentro del componente para guardar la información del usuario (user).*/
  const [user, setUser] = useState<User | null>(null);

  /* Aquí es donde onAuthStateChanged cobra vida.se suscribe al estado de autenticación de Firebase. Firebase llamará a la función (user) => { ... } cada vez que un usuario inicie o cierre sesión. */
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      /*Si hay un usuario, se llama a setUser(user) para actualizar el estado del componente. */
      if(user){
        console.log("El estado del usuario conectado es : ", user );
        setUser(user);
      }

      /* Es la función de limpieza. Cuando el componente se desmonta, esta función se ejecuta para desuscribir el listener de Firebase y evitar errores o fugas de memoria. */
      return () => {
        unsubscribe();
      }


    });
      
  });

  /*Aquí se crea un objeto value que contiene el estado actual del usuario y todas las funciones de autenticación. */
  const value: AuthContextData = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  /*El componente renderiza el Proveedor del Contexto y le pasa el objeto value. Esto hace que user y todas las funciones estén disponibles para cualquier componente que esté dentro de él. */
  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

/*Este es un Hook personalizado que simplifica la forma en que los otros componentes acceden al contexto */
export const useUserAuth = () => {
  return useContext(userAuthContext);
}


/*
Resumen de Flujo
Montaje: Cuando tu aplicación arranca, se carga el UserAuthProvider. El useEffect se ejecuta una sola vez y se suscribe a los cambios de autenticación de Firebase.

Inicio de Sesión: Un componente (como el del singup) llama a googleSignIn() o signUp(). Estas funciones se comunican con Firebase.

Cambio de Estado: Firebase responde, y el onAuthStateChanged que está escuchando en el useEffect se activa.

Actualización: onAuthStateChanged llama a setUser(user). Esto actualiza el estado local del proveedor.

Re-renderizado: El componente UserAuthProvider se actualiza. El value del contexto ahora contiene el nuevo user.

Disponibilidad: Automáticamente, cualquier componente que use el hook useUserAuth se entera del cambio y se actualiza, lo que le permite mostrar la información del usuario o redirigirlo.

*/