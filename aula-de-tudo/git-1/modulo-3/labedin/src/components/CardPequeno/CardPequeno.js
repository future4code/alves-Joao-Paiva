import React from "react";
import "./CardPequeno.css";

function CardPequeno(props){
    return(
        <div className='vermais'>
            <img src={ props.imagem } />
            <h4>{ props.email }</h4>
            <p>{ props.descricao }</p>
        </div>
    )
}



export default CardPequeno;