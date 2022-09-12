import { getProfile } from "./endpoints/getProfile";
import { getUser } from "./endpoints/getUserByEmail";
import { postLogin } from "./endpoints/postLogin";
import { postUser } from "./endpoints/postUser";
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log('Servidor rodando na porta 3003')
})

export default app



app.post("/user/signup", postUser)
app.get("/user", getUser)
app.post("/user/login", postLogin)
app.get("/user/profile", getProfile)
