import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/singup/singup";
import Home from "./pages/home/home";

export const router = createBrowserRouter([
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