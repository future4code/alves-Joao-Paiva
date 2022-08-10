


//A)
console.log("Olá, Bem vindos")

//console.log("Olá", process.argv[2],"! Você tem", process.argv[3],"Anos")


//B)

/*Exercício*/


//A)Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

//b)

const nome = process.argv[2]
const idade = + (process.argv[3])

//console.log(`Olá, ${nome}! você tem ${idade} anos.`)

// c)
const novaIdade = idade + 7
console.log(`Olá, ${nome}! você tem ${idade} anos.`)




