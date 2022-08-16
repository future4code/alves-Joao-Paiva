import express, {Request, Response} from 'express';
import cors from 'cors';
import { Afazeres } from './data';

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

// Exercício 1
app.get("/ping", (req, res) => {
    res.send("Pong!");
});


//exercicio 4
app.get('/allafazeres', (req, res) => {
    const usuario = req.headers.authorization
    const todosAfazeres = Afazeres.filter((afazer) => {
     return afazer.completed === false
    })
    res.send(todosAfazeres)
  })

// exercicio 5
app.post('/createAfazer', (req, res) => {
    const usuario = req.headers.authorization
    const { userId, id, title, completed} = req.body
  
    Afazeres.push({ userId, id, title, completed })
    
    res.status(201).send(Afazeres)
  })
// exercicio 6

app.put('/allafazeres/:id', (req:Request, res:Response) => {
    const id:Number = Number(req.params.id);
  
    const modificar = Afazeres.map((afazer) => {
      if(afazer.id === id){
        return { ...afazer, completed: !afazer.completed}
      }else{
        return afazer;
      }
    })
    res.send(modificar) 
  })
//exercicio 7
app.delete('/delete/:id', (req, res) => {
    const id:Number = Number(req.params.id);
  
    const deleteAfazer = Afazeres.filter((afazer) => {
      return afazer.id !== id 
    })
    res.send(deleteAfazer)
  })

 //exercicio 8
app.get('/afazer/:userId', (req,res) => {
    const userId:Number = Number(req.params.userId);
  
    const afazeresUsuario = Afazeres.filter((afazer) => {
      return afazer.userId === userId
    })
    res.send(afazeresUsuario)
  }) 

  