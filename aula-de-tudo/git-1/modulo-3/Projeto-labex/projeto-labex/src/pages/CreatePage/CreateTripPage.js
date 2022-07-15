import { useState } from "react";
import axios from "axios";

export const CreatePage = () =>{

    const [Viagens, setViagens] = useState ([])
    const [nome, setNome] = useState('')
    const [descricoes, setDescricao] = useState('')
    const [dias, setDias] = useState('')
    const [planeta, setPlaneta] = useState('')
    const [date, setData] = useState('')

    const onClickCriar = () =>{
       const objeto = {
            "name":nome ,
            "planet":planeta ,
            "date": date,
            "description":descricoes ,
            "durationInDays": dias
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-pedro-paiva-sousa-alves/trips', objeto, {
            Headers:{
                auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
            }
        })

       
        .then((response)=>{
            console.log(response.data)
            setViagens(response.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    const pegaNome = (event) =>{
        setNome(event.data.value)
    }
    const descricao = (event)=>{
    setDescricao(event.data.value)
    }
    const listaDias = (event)=>{
        setDias(event.data.value)
    }

    const listPlaneta = (event) =>{
        setPlaneta(event.data.value)

    }
    const listData = (event) =>{
        setData(event.data.value)
    }

    return(
        
        <div>
            <input placeholder="nome" onChange={pegaNome} />
            
            <select onChange={listPlaneta}>
                <option>Marte</option>
                <option>Venus</option>
                <option>Jupter</option>
                <option>Saturno</option>
                <option>Neturno</option>
                <option>Urano</option>
            </select>
            <form>
                <label htmlFor="data">Data:</label>
                <input onChange={listData} type="date" value={date} id="data" name='data'></input>
            </form>
            <input placeholder="Descrição" onChange={descricao} />
            <input placeholder="Duração em dias" onChange={listaDias} />

<button onClick={onClickCriar}>Criar</button>
        </div>

    )

}
