import axios from "axios";

const apiRequest = axios.create ({

    baseURL: "https://movies-38f90-default-rtdb.firebaseio.com",
    params: {
        api_key: "prueba-api-key"
    }
}) 

export default apiRequest