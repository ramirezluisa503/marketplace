/*Aqui vamos a crear el contexto para la pagina del login  */
/*Este código crea un sistema de autenticación para una aplicación web usando React y Firebase. Centraliza la lógica de inicio y cierre de sesión para que la información del usuario esté disponible en toda la aplicación de manera sencilla. */

import type Signup from '@/pages/singup/singup';
/*Importamos funciones claves e Firebase para la autenticación*/
import {
  GoogleAuthProvider, /*Permite autenticar a los usuarios con google */
  User, /*El tipo de dato que Firebase usa para representar un usuario autenticado*/
  createUserWithEmailAndPassword, /*Crea un nuevo usuario con email y contraseña*/
  onAuthStateChanged, /*Una función que escucha y detecta el estado de autenticacion del usuario (inisia sesion. cierra sesion) */
  signInWithEmailAndPassword, /*Inicia sesion con email y contraseña */
  signInWithPopup,/*Muestra una ventana emergente para autenticacion */
  signOut,/*Cierra sesion del usuario */
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import type { LogOut } from 'lucide-react';
import { useContext, useEffect,createContext } from 'react'; /*Hooks de react */


/*Define las propiedades que el componente UserAuthProvider recibira */
interface IUserAuthProviderProps {
  children: React.ReactNode;
}


/*La informacion que se va a guardar en el contexto  */
type AuthContextData = {
  /*Cuando usas la autenticacion de firebase, la autentificacion genera un estado OD y luego devulve al usuario actual que ha iniciado sesión */
  /*Básicamente, estos datos de contexto son en realidad los datos que se van a analizar */
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


/*Aqui se crea el contexto React (userAuthContext), le damos un valor por defecto que incluye user nulo y las funciones que definimos antes   */
export const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

/*COMPONENTE PRINCIPAL (EL PROVEEDOR) */

export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {

  /* useState es el Hook de React para manejar el estado local en un componente. user es la variable de estado y setUser es la función para actualizarla.*/
  const [user, setUser] = useState<User | null>(null);

  /*Su principal tarea es suscribirse a los cambios de autenticación de Firebase usando onAuthStateChanged. Cuando el estado del usuario cambia (inicia o cierra sesión), la función (user) => { ... } se ejecuta. */
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
