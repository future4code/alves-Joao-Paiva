
import React from "react";

class Etapa1 extends React.Component {
    render() {

    return (
      <div className="App">
   <form>
    <p><strong> Etapa 1: Dados Gerais</strong></p>
    <label>
     <li>1- Qual o seu nome ?
      <input type="text" placeholder={"Nome"} />
      </li>
    <li> 2- Qual sua idade ?
     <input type="text" placeholder={'Idade'} /> 
     </li>
     <li>3 -Qual seu email?
     <input type={"text"} placeholder={'Email'}/>
</li>
<li>4. Qual a sua escolaridade?
<select>
  <option value="incompleto">Ensino médio incompleto</option>
  <option value="completo">Ensino médio completo</option>
  <option selected value="S.incompleto">Ensino superior incompleto</option>
  <option value="S.completo">Ensino superior completo</option>
</select>
</li>
    </label>
    <input type="submit" value="Próxima etapa" />
  </form>
         </div>
    

    );
  }
}
  export default Etapa1;