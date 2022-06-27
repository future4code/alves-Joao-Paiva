import React from "react";
import axios from "axios";


export default class ChacterListePage extends React.Component{
    state={
        chactersList:[]
    }
    componentDidMount(){
        this.createPlaylist()
    }

    createPlaylist = ()=> {
        const createList = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const namePlayList = {name: this.state.name}
        axios.post(createList, namePlayList, {
            headers:{
                Authorization: "joao-pedro-paiva-sousa-Alves"
            }
        })
        .then((res) => {
            this.setState({chactersList: res.data.results})
        })
        .catch((err) => {
            console.log("Falha na criação", err.response)
        })
       
    }
    getAllPlaylists = () =>{
        const getAllPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(getAllPlaylists,
            {
                headers:{
                    Authorization: "joao-pedro-paiva-sousa-Alves"
                }
            })
            .then((res)=> {
                this.setState({playlists: res.data.result.list})
                console.log("Todas as playlists", this.state.playlists)
            })
            .catch((err)=>{
                console.log(err.data)
            })
    }

     showPlayLists = () =>{
        return this.state.playlists.map((playlists) =>{
            <p key={playlists.id}>{playlists.name}</p>
        })
       }

    render (){
      
        return (
        <div>
            <h1>Lista de Musicas</h1>
            <input onChange = {this.onChangeNamePlaylist} placeholder="Nome da Lista" />
            <button onClick = {this.createPlaylist} type='submit'>Criar</button>
            {this.showPlaylists()}
        </div>
        )
    }
}