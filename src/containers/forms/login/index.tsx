import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { LoginForm } from "../../../types";
import { defaultValues } from './defaultValues';
import { loginSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
    const { register, handleSubmit, formState } = useForm<LoginForm>({
      defaultValues,
      resolver: yupResolver(loginSchema)
    });
    const { login } = useMe();
  
    const onSubmit = (data: LoginForm) => {
      login(data);
    };

  return (
    <Form  onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" {...register("email")}/>
        {formState.errors.email && (
           <Form.Text className="text-muted">
           {formState.errors.email?.message}
       </Form.Text>
        ) }
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password"  autoComplete="off"
          {...register("password")}/>
        {formState.errors.password && ( <Form.Text className="text-muted">
            {formState.errors.password?.message}
        </Form.Text>)}
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export { Login } 