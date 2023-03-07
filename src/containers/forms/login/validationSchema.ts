import { object, string } from 'yup';

export const loginSchema = object({
  name: string().email( "Debe ingresar un email" ).required( "Este campo es requerido" ),
  password: string().required("Este campo es requerido").matches(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/,{
        message: "La contraseña debe tener al menos ocho caracteres, una mayúscula, una minúscula y un número o carácter especial"
    }
  )
 
});
//Validación con al menos ocho caracteres, una mayúscula, una minúscula y un número o carácter especial.