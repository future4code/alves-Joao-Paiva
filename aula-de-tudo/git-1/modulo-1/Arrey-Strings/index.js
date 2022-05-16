// Exercícios de interpretação de código
//  ATIVIDADE 1

/*let array
console.log('a. ', array) // AO SER EXECUTADO O PROGRAMA SERÁ IMPRESSO "UNDEFINED"

array = null
console.log('b. ', array) // AO SER EXECUTADO O PROGRAMA SERÁ IMPRESSO "NULL"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // AO SER EXECUTADO O PROGRAMA SERÁ IMPRESSO TODOS OS ELEMENTOS "ARREY"

let i = 0
console.log('d. ', array[i])// AO SER EXECUTADO O PROGRAMA SERÁ IMPRESSO "3"

array[i+1] = 19
console.log('e. ', array) // AO SER EXECUTADO O PROGRAMA SERÁ IMPRESSO "ARREY" COM O NOVO ELEMENTO SUBSTITUIDO
// QUE ANTES ERA 4, AGORA PASSOU A SER 19.


const valor = array[i+6]
console.log('f. ', valor) // AO SER EXECUTADO O PROGRAMA SERÁ IMPRESSO ARREY COM O NOVO ELEMENTO QUE SERÁ "9"

// ATIVIDADE 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// A FRASE QUE ESTAVA EM minúsculo para MAIÚSCULO,  USANDO O REPLACEall "A" IRARA SUBSTITUIR PARA "I".

//  Exercícios de escrita de código

// ATIVIDADE 1
const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu email?")

console.log(`O e-mail ${emailDoUsuario} foi criado com sucesso. Seja bem-vindo(o) ${nomeDoUsuario} !`)
*/
// ATIVIDADE 2

/*const comidasFavoritas = ["Feijão", "Alface", "Peixe", "Farofa", "Cuscuz"]

console.log(`Essas são minhas comidas preferidas: \n ${comidasFavoritas[0]} \n ${comidasFavoritas[1]} \n ${comidasFavoritas[2]} \n ${comidasFavoritas[3]} \n ${comidasFavoritas[4]}`)*/

let arreyFavoritas = ["Feijão", "Alface", "Peixe", "Farofa", "Cuscuz"]

let clienteComida = prompt("Qual sua comida preferida?")

arreyFavoritas.splice(2, 1, clienteComida)
console.log(arreyFavoritas)

///////



let arreySO
let listaAtividades = arreySO

let atv1 = prompt("Primeira atividade")
let atv2 = prompt("Segunda atividades")
let atv3 = prompt("Terceira atividade")

arreySO = [atv1[0], atv2[1], atv3[2]]
console.log(arreySO)
let indice = prompt("Escolha de 0 a 2")

let indece = arreySO.splice([indice], 1)
console.log(arreySO)