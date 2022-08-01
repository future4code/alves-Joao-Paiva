import React from 'react';
import './App.css';
import Etapa01 from './components/Etapa01/Etapa01';
import Etapa02 from './components/Etapa02/Etapa02';
import Etapa03 from './components/Etapa03/Etapa03';
import Final from './components/Final/Final';
import styled from 'styled-components'

const ContainerTela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EstilizaBotao = styled.button`
  text-align: center;
  margin-top: 20px;
`


export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa01 />;
      case 2:
        return <Etapa02 />;
      case 3:
        return <Etapa03 />;
      case 4:
        return <Final />
    }
    
  }

  ProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }
  render() {
    return (
      <ContainerTela>

        <ContainerTela>
          {this.renderizaEtapa()}

          {
            this.state.etapa !== 4 &&
          <EstilizaBotao onClick={() => this.ProximaEtapa()}>Próxima Etapa</EstilizaBotao>
          }
          
        </ContainerTela>

      </ContainerTela>
    );
  }

}