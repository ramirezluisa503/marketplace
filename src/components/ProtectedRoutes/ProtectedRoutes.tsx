/*Las ProtectedRoutes (rutas protegidas) en el desarrollo web se usan para restringir el acceso a ciertas partes de una aplicación a usuarios no autorizados o que no cumplen con ciertos requisitos, como no haber iniciado sesión. Son una forma de implementar el control de acceso y la seguridad en una aplicación web.  */


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

    /*Cuando la pagina se demora un poco en cargar aparece la palabra ...Loading */
    if (loading) {
        return <div>...Loading</div>
    }

    return user ? (<Outlet />): (
        /*nos lleva a la pagina de login para que pueda acceder a la pagina protegida */
        <Navigate to="/login" state={{from: location }} />
    ) ;
}

export default ProtecctedRoutes;