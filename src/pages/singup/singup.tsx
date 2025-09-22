import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUserAuth } from '@/context/userAuthContext';
import type { UserSignIn } from '@/types/types';
import { Label } from '@radix-ui/react-label';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialValue: UserSignIn = {
  email: '',
  password: '',
  confirmPassword: '',
};

interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserSignIn>(initialValue);
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/');
    } catch (error) {
      console.log('Error : ', error);
    }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('The user info is : ', userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate('/');
    } catch (error) {
      console.log('Error : ', error);
    }
  };
  return (
    <div className="bg-slate-800 w-screen h-screen pt-20">
      <div className="container mx-auto p-6 h-full">
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 gap-2">IMAGENES</div>
          <div className="max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center mb-4">
                    Market Place
                  </CardTitle>
                  <CardDescription>
                    Ingresa tu correo electrónico a continuación para crear tu
                    cuenta
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid">
                    <Button
                      variant="outline"
                      onClick={handleGoogleSignIn}
                    >
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
                    <Label htmlFor="email">
                      Dirección de correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dipesh@example.com"
                      value={userInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      value={userInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmpassword">
                      Confirmar contraseña
                    </Label>
                    <Input
                      id="confirmpassword"
                      type="password"
                      placeholder="Confirmar contraseña"
                      value={userInfo.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({
                          ...userInfo,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button
                    className="w-full text-black"
                    type="submit"
                  >
                    Inscribirse
                  </Button>
                  <p className="mt-3 text-sm text-center">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login">Iniciar Sesión</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
