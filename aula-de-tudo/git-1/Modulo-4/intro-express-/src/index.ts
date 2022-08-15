import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercício 1

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Bom dia a Todes!!")
})

// Exercício 2

type User = {
    id: string | number,
    name: string,
    phone: number,
    email: string,
    website: string
}
const users: User[] = [
    {
        id: 1,
        name: "Joao Pedro Paiva",
        phone: 123456789,
        email: "gatohttopr@gmail.com",
        website: "joaopedropaivadev.com" 
    },
    {
        id: 2,
        name: "Ana Carolina",
        phone: 123456789,
        email: "anapsicologaclinica@hotmail.com",
        website: "clinicapsicologicacarol.com" 
    },
    {
        id: 3,
        name: "Jonas Carvalho",
        phone: 123456789,
        email: "jonasarquitetura@gmail.com",
        website: "jonasarquiterturaeassociados.com" 
    }
]
// Exercício 4

app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Calor galera.")
    }
    res.status(201).send(users)
})

// Exercício 5

type Post  = {
    id: number 
    title: string,
    body: string,
    userId: string | number 
}

//Exercicio 6


const posts: Post [] = [
    {
        id: 1,
        title: "Estava com fome na aula",
        body: "E queria almoçar logo.",
        userId: 1
    },
    {
        id: 2,
        title: "B-R-O",
        body: "35º Graus, e esta feio",
        userId: 2
    },
    {
        id: 3,
        title: "O calor",
        body: "Ventilador com vento de fogo",
        userId: 3
    },
]
// Exercício 7

app.get("/posts", (req: Request, res: Response) => {

    if(!posts.length){
       res.status(401).send("Hello!!!")
    }

    res.status(201).send(posts)
})
// Exercício 8
app.get("/posts/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(post.length === 0) {
        return res.status(400).send("Vai da erro ?")
     } 
        
        res.status(201).send(post)   
})


//--------CHALLENGE.



//Exercicio 9
app.delete('/posts/:postId', (req, res) => {
    const postId = Number(req.params.postId)

    if (!postId) {res.status(400).send('Erro, verifique ID.')}

    const newPosts: Post[] = posts.filter(post => {
        if (post.id !== postId) {return post}
    })
    res.status(200).send(newPosts)
})
