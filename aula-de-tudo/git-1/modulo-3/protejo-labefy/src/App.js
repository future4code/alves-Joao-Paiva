import React from "react";
import ChacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import ChacterListePage from "./pages/CharacterListePage/CharacterListePage";

export default class App extends React.Component {
  state ={
    currentScreen: "Lista"
  }
  selectPage = () =>{
    switch (this.state.currentScreen){
      case "Lista":
        return <ChacterListePage />
        case "Detail":
          return <ChacterDetailPage />
          default:
            return <ChacterListePage />
    }
  }
render(){
  return (
    <div>
    {this.selectPage()}
    </div>
  );
}

}


