
import React from "react";

class Etapa2 extends React.Component {
    render() {

        return (
          <div className="Etapa2">
            <p><strong> Etapa 2:INFORMAÇÕES DO ENSINO SUPERIOR</strong></p>
       <form>
       <li>6- Qual seu curso ?
      <input type="text" placeholder />
      </li>
    <li> 7- Qual a unidade de ensino ?
     <input type="text" placeholder /> 
     </li>
       </form>
       <input type="submit" value="Próxima etapa" />
        </div> 
        );
  }
}
export default Etapa2;