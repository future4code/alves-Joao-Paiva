import React from 'react'
import * as C from './styled' 
import { useNavigate } from "react-router-dom"

export const HomePage = () =>{

const navigate = useNavigate()  
const GoToLoginPage = () =>{
  navigate("/LoginPage")
}
const ListPage = () =>{
  navigate("/listtrip")
}



  return (
    <div>
          <C.Title>Labex TourWorld</C.Title>
         
        <C.botoes>
        <C.btn placeholder='#'onClick={ListPage}> Lista de Viagens</C.btn>
        <C.btn placeholder='#'onClick={GoToLoginPage}>Área de admin</C.btn>
        </C.botoes>  
    </div>
  )
}
