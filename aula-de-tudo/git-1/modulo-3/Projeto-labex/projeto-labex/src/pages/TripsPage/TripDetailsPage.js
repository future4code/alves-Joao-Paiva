import axios from "axios"
import { useEffect } from "react"

const token = localStorage.getItem("token")

export const Details = () =>{
    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/NoIFVcOiSgTKTIPVZwXS", {
            headers:{
                auth:token
            }
        })
        .then((Response)=>{
            console.log(Response.data)
        })
        .catch((err)=>{
            console.log(err.Response)
        })

    })

}