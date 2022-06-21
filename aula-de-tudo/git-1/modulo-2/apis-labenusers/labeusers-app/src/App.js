import React from "react";
import axios from "axios";
import Playlist from "./componentes/Playlist";

export default class App extends React.Component {
  state = {
    usuarioNovo: [],
    erro: "",
    email: ""
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "joao-pedro-paiva-sousa-Alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data });
      });
  };

  criaUsuario = () => {
    const novaUsuario = {
      name: this.state.nomeUsuario
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        novaUsuario,
        {
          headers: {
            Authorization: "joao-pedro-paiva-sousa-Alves"
          }
        }
      )
      .then((resposta) => {
        console.log(resposta);
        resposta.status === 200 && alert("sua playlist foi enviada");
        this.pegarPlaylists();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  novoNomeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value });
  };
  render() {
    return (
      <main>
        <input
          value={this.state.nomeUsuario}
          onChange={this.novoNomeUsuario}
        />
        <button onClick={this.criaPlaylist}>Enviar</button>
        {this.state.erro ? (
          <p>{this.state.erro}</p>
        ) : (
          this.state.playlists.map((playlist) => {
            return <Playlist key={nomeUsuario.id} usuarioNovo={nomeUsuario} />;
          })
        )}
      </main>
    );
  }
}

