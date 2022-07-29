import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Fundo = styled.div`

background-color: orange;
border:solid gray 1px;
border-radius: 7px;
padding: 20%;
width:20%;
`

export function Chat() {
  const [mensagem, setMensagem] = useState ([])
  const [usuario, setUsuario] = useState ('')
  const [msgUsuario, setMsgUsuario] = useState ('')

  const OnChangeUsuario = (e) => {
    setUsuario(e.target.value)
    console.log(usuario)
  }
  const OnChangeMsgUsuario = (e) => {
    setMsgUsuario(e.target.value)
    console.log(msgUsuario)
  }

  const novaMensagem = {
    user: usuario,
    mensagem: msgUsuario
  }
  
  const attChat = () => {
  const novaLista = [...mensagem, novaMensagem]
  

    setMensagem(novaLista)
    setUsuario('')
    setMsgUsuario('')
  }
  console.log(mensagem)
  const tela = mensagem.map((item) =>{
    return <p key={item.usuario}>{item.usuario}: {item.mensagem}</p>
  } )

return (
    <div>
    <div>
       <Fundo>
        {tela}</Fundo>
    </div>
    <div className="btn">
        <input placeholder="usuario" value={usuario} onChange={OnChangeUsuario}/>
        <input placeholder="mensagem" value={msgUsuario} onChange={OnChangeMsgUsuario}/>
        <button onClick={attChat}>Enviar</button>
    </div>
    </div>
)
    
}
