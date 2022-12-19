import axios from "axios"

const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}
export const getData=()=>{
    let response=axios.get(" http://localhost:8000/products",headerConfig)
    return response
}

export const addData=(dataObj)=>{
    let response=axios.post("http://localhost:8000/data",dataObj,headerConfig)
    return response
}