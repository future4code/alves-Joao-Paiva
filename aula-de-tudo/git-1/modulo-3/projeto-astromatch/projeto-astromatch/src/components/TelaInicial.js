import React from 'react'
import axios from 'axios'
import {useState} from 'react'

function TelaInicial() {

 const [setFotoUsuario, setNomeUsuario, setIdadeUsuario, setBioUsuario] = useState("")
const [fotoUsuario, nomeUsuario, idadeUsuario, bioUsuario] = useState([])
const escolhaPerfil = ()=>{
const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
axios.get(url)
.then((res) =>{
    console.log(res)
    setFotoUsuario(res.data.profile.photo)
    setNomeUsuario(res.data.profile.name)
    setIdadeUsuario(res.data.profile.age)
    setBioUsuario(res.data.profile.bio)
})
.then((err) => {
    alert(err.response)
})
}

return (
    <div>
        <h2>Tela Inicial</h2>
    
    <img src={fotoUsuario}/>
    <p>{nomeUsuario}</p>
    <p>{idadeUsuario}</p>
    <p>{bioUsuario}</p>
        
        <button onClick={escolhaPerfil}>Próximo Perfil</button>
    </div>
)
}
export default TelaInicial;





