import React from "react";

class Etapa3 extends React.Component {
    render() {

        return (
          <div className="Etapa3">
            <p><strong> Etapa 3:INFORMAÇÕES GERAIS DE ENSINO </strong></p>
       <form>
       <li>8- Qual seu curso ?
      <input type="text" placeholder />
      </li>
    <li> 9- Qual a unidade de ensino ?
    <select>
    <option value="incompleto">Nenhum</option>
  <option value="incompleto">Curso técnico</option>
  <option value="completo">Curso de inglês</option>
  
</select> 
     </li>
       </form>
       <input type="submit" value="Próxima etapa" />
        </div> 
        );
  }
}
export default Etapa3;