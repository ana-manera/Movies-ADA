import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { LoginForm } from "../../../types";

const Login = () => {
    const { register, handleSubmit } = useForm<LoginForm>();
    const { login } = useMe();
  
    const onSubmit = (data: LoginForm) => {
      login(data);
    };

  return (
    <Form  onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" {...register("email")}/>
        <Form.Text className="text-muted">
            Nunca compartiremos tu correo electrónico con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password"  autoComplete="off"
          {...register("password")}/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export { Login } 