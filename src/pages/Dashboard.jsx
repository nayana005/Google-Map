import React from 'react'
import {getData} from '../services/dataService'

function Dashboard() {
    const getDataApi = () => {
        getData().then((response)=>{
            console.log(response.data);
        })
    }
    React.useEffect(()=>{getDataApi()},[])
    return (
        <h1>Hi</h1>
    )
}

export default Dashboard
