import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { SignUpForm } from '../../../types';
import { servicesUser } from '../../../services/users';

const SignUp = () => {

  const { register, handleSubmit } = useForm<SignUpForm>()

  const onSubmit = (data: SignUpForm) => {
    servicesUser.add(data)
  }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresar nombre" {...register("name")} />
          <Form.Text className="text-muted">
            Datos incorrectos
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresar apellido" {...register("lastname")}/>
          <Form.Text className="text-muted">
            Datos incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresar email" {...register("email")}/>
          <Form.Text className="text-muted">
            Datos incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder=" Ingresar password"{...register("password")}  />
          <Form.Text className="text-muted">
            Datos incorrectos
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthdate">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" placeholder="Ingresar Fecha de Nacimiento" {...register("birthdate")} />
          <Form.Text className="text-muted">
            Datos incorrectos
          </Form.Text>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Crear cuenta
        </Button>
      </Form>

    )
        
    
} 

export {SignUp}