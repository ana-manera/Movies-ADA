import { LoginForm, User } from "../../types";
import { servicesUser } from "../../services/users";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { useEffect } from "react";

const useMe = () => {
  
  useEffect(()=>{
    loginWithToken()
  }, [])

  const login = async ({email, password}: LoginForm) => {
    const user = await servicesUser.getBy("email", email)

    if( user && user.password === password){
        const token = tokenGenerator()
        servicesUser.update({ id: user.id, token })
        localStorage.setItem("token",token)
    }
    else {
        console.log("login incorrecto")
    }
  };

  const signup = ( user:Omit<User, "id">) => {
   
  };

  const forgotPassword = () => {
  };

  const loginWithToken = async () => {
    const token = localStorage.getItem("token")
    if (token){
      const user = await servicesUser.getBy("token",token)
      console.log(user)
    }
  };

  const logout = async () => {
  };

  return {  login, signup, forgotPassword, loginWithToken, logout };
};

export { useMe };