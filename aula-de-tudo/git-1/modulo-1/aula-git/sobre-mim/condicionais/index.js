// Exercícios de interpretação de código
//1- 
//a) Explique o que o código faz. Qual o teste que ele realiza? 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} // AO SER EXECUTADO O PRAGRAMA IMPRIMIRAR SE 2 É MAIOR QUE 0, CASO SEJA O MESMO INFORMARA PASSOU NO TESTE.
// CASO NÃO O MESMO NÃO PASSOU, CHAMAMOS OS MESMO DE CONDICIONAIS, DE IGUALDADE FAZENDO COMPARAÇÕES DE MAIOR OU MENOR, OU IGUALDADES.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// PARA NUMEROS SUPERIOR A 2.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// PARA NUMEROS INFERIOR A 2.

// 2- O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
//let fruta = prompt("Escolha uma fruta")
//let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// a) Para que serve o código acima?
// CODIGO ASSIM É CHAMADA DE SWITCH CASE, É UMA MANEIRA DE SIMPLIFICAR AS VARIAVEIS.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
 // O valor será de 5 dolares.

 // c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

 let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
  
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
 // O preço da fruta  Pêra  é  R$  5


// 3 Leia o código abaixo:
//const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
// SOLICITANDO AO USUARIO QUE DIGITE UM NUMERO

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// O MESMO NÃO TERIA RESPOSTA.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// CASO O NUMERO SEJA INFERIOR A "0" MOSTRARAR MENSAGEM NÃO DEFINIDA.

///===============================================================================

///   Exercícios de escrita de código

const age = Number (prompt("Qual sua idade?"))

 if (age >=18) {
     console.log('Você pode dirigir')
     
 } else {
   console.log('Você não pode dirigir')
 }

 // ==========================================
 //2 Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
 
 //let turno =prompt("Qual seu turno?")
 if (turno === "M") {
     console.log("Bom dia!")
 } else if (turno === "V"){
     console.log("Boa Tarde!")
 } else if (turno== "N"){
     console.log("Boa Noite!")
 } else{
     console.log(turno)
 }
//==================================
// 3 Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
let turno =prompt("Qual seu turno?")
switch (turno){
    case "M":
    console.log("Bom dia!")
    break
    case "V":
    console.log("Boa tarde!")
    break
    case "N":
    console.log("Boa noite!")    
    break        
}
//=================================================
// 4
let filme =prompt("Qua gênero de filme?")
let ingresso = prompt("Qual o preço do ingresso?")

switch (filme){
    case "fantasia":
    ingresso = 18
    //console.log("bom filme!")
        break
    case "terror":
    ingresso = 14    
    //console.log("bom filme!")
   default:
    ingresso = 20
    break

}
console.log("Escolha outro filme!")





 
  