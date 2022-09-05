// import app from "./app"
import { Character } from "./types"

const personagem: Character = 
new Character("Alice", "Alice no país das maravilhas")

// console.log(personagem)


const personages: Character[] = [personagem, new Character("Pinoquio", "Pinoquio")]

// console.log(personages)

// console.log(personagem.name)

console.log(personagem.getName())
personagem.setName("Alyce")
console.log(personagem)