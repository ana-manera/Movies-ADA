import { LoginForm, User } from "../../types";
import { servicesUser } from "../../services/users";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { AuthContext } from "../../contexts";
import { useContext } from "react";


const useMe = () => {
  const { me, setMe } = useContext(AuthContext);

  const login = async ({ email, password }: LoginForm) => {
    console.info("login");
    const user = await servicesUser.getBy("email", email);

    if (user && user.password === password) {
      const { id, name, lastname } = user;

      const token = tokenGenerator();

      servicesUser.update({ id, token });

      localStorage.setItem("token", token);

      setMe({ id, name, lastname, email });
    } else {
      console.log("login incorrecto");
    }
  };

  const signup = ( user:Omit<User, "id">) => {
    console.info("signup");
  };

  const forgotPassword = () => {
  };

  const loginWithToken = async () => {
    console.info("loginWithToken");
    const token = localStorage.getItem("token");

    if (token && !me) {
      const user = await servicesUser.getBy("token", token);
      if (user) {
        setMe({
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        });
      }
    }
  };


  const logout = async () => {
  };

  return { me, login, signup, forgotPassword, loginWithToken, logout };
};

export { useMe };