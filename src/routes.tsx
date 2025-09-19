import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/singup/singup"; // Corrected the import name
import Home from "./pages/home/home";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

export const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children: [
            {
                // The root path '/' is for the protected home page.
                path: "/",
                element: <Home />,
            },
            // Add more protected routes here.
        ],
    },
    {
        // The login route does not need protection.
        path: "/login",
        element: <Login />
    },
    {
        // Add the signup route, which also doesn't need protection.
        path: "/signup", 
        element: <Signup /> // Corrected the component name
    },
]);

export default router;