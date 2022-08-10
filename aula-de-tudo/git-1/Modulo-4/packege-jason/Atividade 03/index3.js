const fs = require('fs')



const tarefa = process.argv[2]
const listaAtividade = ["comprar", "comprar maça"]

listaAtividade.push(tarefa)

console.log(listaAtividade)