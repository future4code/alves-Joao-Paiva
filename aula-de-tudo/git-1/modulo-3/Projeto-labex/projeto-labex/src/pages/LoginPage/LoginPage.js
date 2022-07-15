import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as C from './styled' 

export const LoginPage = () =>{
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState ("");

    const navigate = useNavigate

    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    };
    const onChangePassword = (event) =>{
        setPassWord(event.target.value);
    };
    const onSubmitLogin = () => {
        console.log(email, passWord);
        const body = {
            email:email,
            password:passWord
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/login", body)
        .then((Response)=>{
            console.log("Deu certo", Response.data.token)
            localStorage.setItem("token", Response.data.token)
            navigate("/")
        })
        .catch((err)=> {
            console.log("Deu errado", err.Response)
        })
    };
    return(
        <div>
            <input placeholder="Email"
            type="Email"
            
            onChange={onChangeEmail}
            />
            <input placeholder="PassWord"
            type="PassWord"
            
            onChange={onChangePassword}
            />
            <button onClick={onSubmitLogin}>Enviar</button>
        </div>
    )
};