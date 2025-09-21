import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUserAuth } from "@/context/userAuthContext";
import type { UserLogIn } from "@/types/types";
import { Label } from "@radix-ui/react-label";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const initialValue: UserLogIn = {
  email: '',
  password: ''
};

interface ILoginProps{

}

const Login: React.FunctionComponent<ILoginProps> = (props) =>{


    const { googleSignIn, logIn } = useUserAuth();
    const navigate = useNavigate();
 
    const [userLoginInfo, setUserLoginInfo] = React.useState<UserLogIn>(initialValue);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        console.log('La información del usuario es: ', userLoginInfo);
        await LogIn(userLoginInfo.email, userLoginInfo.password);
        navigate("/");
      } catch (error) {
        console.log('Error : ', error);
      }
    };
  
  
    /*La función handleGoogleSignIn funciona de manera similar, pero en lugar de usar el email y la contraseña, llama a la función googleSignIn para autenticar al usuario a través de Google. */
    const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/");
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    
    return (
      <div className="bg-slate-800 w-screen h-screen">
      <div className="container p-6 flex h-full justify-center">
        <div className="flex justify-center items-center w-full">
          <div className="max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center mb-4">
                    Market Place
                  </CardTitle>
                  <CardDescription>
                    Ingresa tu correo electrónico a continuación para crear tu cuenta
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid">
                    <Button variant="outline" onClick={handleGoogleSignIn}>
                      Iniciar con Google
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        o
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Dirección de correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dipesh@example.com"
                      value={userLoginInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLoginInfo({ ...userLoginInfo, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      value={userLoginInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLoginInfo({ ...userLoginInfo, password: e.target.value })
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full text-black" type="submit">
                    Inscribirse
                  </Button>
                  <p className="mt-3 text-sm text-center">
                    ¿Ya tienes una cuenta? <Link to="/signup">Registrarse</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;