import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUserAuth } from '@/context/userAuthContext';
import type { UserLogIn } from '@/types/types';
import { LogIn } from 'lucide-react';
import * as React from 'react';
import { useNavigate, Link} from 'react-router-dom';

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
      <div className="bg-slate-800 w-screen h-screen ">
        <div className="container p-6 flex h-full justify-center">
          <Card className="w-full max-w-sm ">
            <CardHeader>
              <CardTitle>Regístrese para obtener una cuenta</CardTitle>
              <CardDescription>
                Ingrese su correo electrónico y contraseña a continuación para crear una cuenta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Correo</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userLoginInfo.email}
                      placeholder="m@example.com"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLoginInfo({ ...userLoginInfo, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Contraseña</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={userLoginInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLoginInfo({ ...userLoginInfo, password: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <CardFooter className="flex-col gap-2 p-0 pt-6">
                  <Button 
                  type="submit" 
                  className="w-full text-black">
                    Inscribirse
                  </Button>
                  <p className='mt-3 text-sm text-center'>
                    No tienes una cuenta ? <Link to="/signup">Inscribirse</Link>

                  </p>
                </CardFooter>
              </form>
            </CardContent>
          </Card>       
        </div>
          
      </div>
    );
}

export default Login;