/*Aqui vamos a crear el contexto para la pagina del login  */

import type Signup from '@/pages/singup/singup';
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebaseConfig';
import type { LogOut } from 'lucide-react';
import { useContext, useEffect } from 'react';

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

type AuthContextData = {
  /*Cuando usas la autenticacion de firebase, la autentificacion genera un estado OD y luego devulve al usuario actual que ha iniciado sesión */
  /*Básicamente, estos datos de contexto son en realidad los datos que se van a analizar */
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof Signup;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

/*Aqui creamos las funciones */
const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  signOut(auth);
};

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};

export const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {

  const [user, setUser] = userState<User | null>(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log("El estado del usuario conectado es : ", user );
        setUser(user);
      }

      return () => {
        unsubscribe();
      }


    });
      
  });

  const value: AuthContextData = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
}
