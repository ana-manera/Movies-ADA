<<<<<<< HEAD
import { SignUpForm, User } from "../types"
import apiRequest from "../utils/axios"
import { mapToArray } from "../helpers/mapToArray"
=======
import { SignUpForm } from "../types"
import { apiRequest } from "../utils/axios"
>>>>>>> main

const add = async (userPrueba: SignUpForm) => {
    const response =await apiRequest.post("/users.json", userPrueba)
    return response.data
}

const getAll = async (): Promise<User[]> => {
    const response =await apiRequest.get("/users.json")
    return mapToArray(response.data)
}

/*const getByEmail = async (email: string) => {
    const users = await getAll()
    const user = users.find(user => user.email === email)
    return user
}

const getByToken = async (token: string) => {
    const users = await getAll()
    const user = users.find(user => user.token === token)
    return user
}
*/

const getBy = async (type: "email" | "token", value: string) => {
    const users = await getAll();
  
    const user = users.find((user) => user[type] === value);
  
    return user;
  };



const update = ({ id, ...rest }: Partial<User>) => {

    const response = apiRequest.patch(`/users/${id}.json`, { ...rest });

}

export const servicesUser = {add, getAll, update, getBy}