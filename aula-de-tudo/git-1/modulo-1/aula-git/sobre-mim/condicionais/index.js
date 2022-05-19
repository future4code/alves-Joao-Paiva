/// Exercícios de interpretação de código
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/
// a) O que vai ser impresso no console?
// R= AO EXECUTAR O PROGRAMA SERÁ IMPRESSO   NOMES E APELIDOS
//============================================================
// 2  
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
 // a) O que vai ser impresso no console?
 //R = AO EXECUTAR O PROGRAMA SERÁ IMPRESSO NOMES DE USUARIO.
//==========================================================
// 3
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
// a) O que vai ser impresso no console?
//R = AO EXECUTAR O PROGRAMA SERÁ IMPRESSO APENAS APELIDOS COMPARADO CHIJO.*/

/// Exercícios de escrita de código

// 1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const arrayA = pets.map((item, index, array) =>{
    return item.nome
})

console.log(arrayA)

// b) Crie um novo array apenas com os cachorros salsicha
/*const arrayA = pets.filter((pets) =>{
    return pets.raca.toLocaleLowerCase() === "salsicha"
//}) 
const nomeRaca = arrayA.map((pets) =>{
    return pets.nome
})
console.log(arrayA)
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const descontoPet = pets.filter((pets) =>{
    return pets.raca.toLocaleLowerCase() === "poodle"
}) 
const msgDes = descontoPet.map((pets) =>{
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`)
    
})*/

// ======================

// 2 Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 // a) Crie um novo array que contenha apenas o nome de cada item
 //const arrayB = produtos.map((item, index, array) =>{
   // return item.nome
//})

console.log(arrayB)
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const descontoA = produtos.map((produtos) =>{
    delete produtos.categoria
    const preco = produtos.preco
    const valorFinal = preco - (preco * 0.05)

    produtos.preco = valorFinal
console.log(produtos)
})




// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const arrayB = produtos.filter((produtos) =>{
    return produtos.categoria === "Bebidas"
}) 
const nomeBebidas = arrayB.map((item) =>{
    return item
})
console.log(arrayB)
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const arrayC = produtos.filter((produtos) =>{
    
    return produtos.nome.includes("Ypê")
})
console.log(arrayC)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const arrayD = produtos.filter((produtos) =>{
    
    return produtos.nome.includes("Ypê")
})
const smsYpe = produtos.map((produtos) => {
    return console.log(`Compre ${produtos.nome} por ${produtos.preco}`)
})
console.log(arrayD)
// ================================
//   Desafios

// 1 Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 pokemons.sort(function(a, b) {
    if (a.nome < b.nome)
     return -1;
  }) else {
         return true
  }
 
 console.log(pokemons)

