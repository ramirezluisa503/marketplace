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
import type { UserSingIn } from '@/types/types';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const initialValue: UserSingIn = {
  email: '',
  password: '',
  confirmPassword: '',
};

interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserSingIn>(initialValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.confirmPassword) {
      console.log('Las contraseñas no coinciden.');
      return;
    }
    try {
      console.log('La información del usuario es: ', userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate("/");
    } catch (error) {
      console.log('Error : ', error);
    }
  };

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
                      value={userInfo.email}
                      placeholder="m@example.com"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
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
                      value={userInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="confirmpassword">Confirme su contraseña</label>
                    <Input
                      id="confirmpassword"
                      type="password"
                      placeholder="Confirm password"
                      value={userInfo.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                </div>
                <CardFooter className="flex-col gap-2 p-0 pt-6">
                  <Button 
                  type="submit" 
                  className="w-full text-black">
                    Inscribirse
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleGoogleSignIn}
                    className="w-full"
                  >
                    Regístrate con Google
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
          
          
        </div>
        
      </div>
    
    
    
    
  );
};

export default Signup;