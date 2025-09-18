import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/singup/singup";
import Home from "./pages/home/home";
import ProtecctedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

export const router = createBrowserRouter([
    {
        element:<ProtecctedRoutes />,
        children=[
            {
                path: "/",
                element:<Home />
            }
            /*Aqui adentro pongo todas las rutas que quiero proteger
            si la pagina esta dentro de estas rutas inmediatamente me devuelve a la pagina de login
             */
        ]

    },
    {
        path:"/home",
        element:<Home />
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/signup",
        element:<Signup />
    },
]);

export default router;