import * as React from 'react';
import { Navigate,Outlet, useLocation } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';

interface IProtecctedRoutesProps{

}

/*Esto es para las paginas en las que sólo el usuario que este logueado pueda acceder a esas rutas */
const ProtecctedRoutes: React.FunctionComponent<IProtecctedRoutesProps> = (props) =>{

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    /*useLocation nos da la ruta que esta en el navegador  */
    const location = useLocation();

    if (loading) {
        return <div>...Loading</div>
    }

    return user ? (<Outlet />): (
        /*nos lleva a la pagina de login para que pueda acceder a la pagina protegida */
        <Navigate to="/login" state={{from: location }} />
    ) ;
}

export default ProtecctedRoutes;