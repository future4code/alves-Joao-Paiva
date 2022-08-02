import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
      id:Date.now(),
      texto:'Varrer Casa',
      completa: false
    
     },
    ],
    inputValue:'',
    filtro:''
  }
  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };
  componentDidMount() {
    const tarefa = localStorage.getItem("tarefas")
    const tarefaN = JSON.parse(tarefa)
    tarefaN && this.setState({
      tarefas: tarefaN
    })
  };
  onChangeInput = (event) => {
    this.setState({inputValue: event.target.inputValue})
  }

  criarAtividade = () => {
    const novaAtividade = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListDeAtiv = [novaAtividade, ...this.state.tarefas]
    this.setState({tarefas: novaListDeAtiv})
  }
  SelecAtivi = (id) => {
    const novaListDeAtiv = this.state.tarefas.map((tarefa)=> {
      if (id === tarefa.id) {
        const novaAtividade = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaAtividade
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novaListDeAtiv})
    
  }
  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }
  render () {
    const listFiltro = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
        return tarefa.completa
        default:
          return true
      }
    })
    return(
      <div className="App">
        <h1> Lista de tarefas</h1>
        <InputsContainer>
        <input value={this.state.inputValue} onChange={this.onChangeInput} />
        <button onClick={this.criarAtividade}>Adicionar</button>
        </InputsContainer>
        <br/>
        <InputsContainer>
        <label>Filtro</label>
        <select value={this.state.filtro} onChange={this.onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
        </InputsContainer>
        <TarefaList>
          {listFiltro.map(tarefa =>{
            return(
              <Tarefa
              completa={tarefa.completa}
              onClick={() => this.SelecAtivi(tarefa.id)}>
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
