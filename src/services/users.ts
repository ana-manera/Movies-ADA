import { SignUpForm } from "../types"
import apiRequest from "../utils/axios"

const add = async (userPrueba: SignUpForm) => {
    const response =await apiRequest.post("/users.json", userPrueba)
    return response.data
}

const getAll = async () => {
    const response =await apiRequest.get("/users.json")
    return response.data
}

export const servicesUser = {add, getAll}