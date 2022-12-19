import axios from "axios";

export const login = (loginObj) => {
    let response = axios.post("http://localhost:8000/auth/login", loginObj)
    console.log("login successfully")
    return response
}

export const register = (registerObj) => {
    let response = axios.post("http://localhost:8000/auth/register", registerObj)
    console.log("created successfully")
    return response
}