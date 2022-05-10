// Atividade Exercícios de interpretação de código.
//Atividade 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // o que será impresso ao executar o programa será "False"

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  // o que será impresso ao executar o programa será "False"

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)// o que será impresso ao executar o programa será "True"

console.log("d. ", typeof resultado)
// Atividade 2
const primeiroValor  = prompt ("Digite um numero")
const segundoValor  = prompt ("Digite um numero")
//As somas de primeirovalor e segundo valor estao declarados em strings.
const soma = Number (primeiroValor) + Number (segundoValor)

console.log(soma)
// A solução para o erro é ter que transformar as Strings em Number para que as mesma some.

//Exercícios de escrita de código
   // Programa 1
let idadeUsuario = Number(prompt ("Qual é a sua Idade?"))
let amigo = Number (prompt("Qual é a idade de seu melhor amigo?"))

const resultadoIdade = idadeUsuario > amigo
const resultadoDiferença = idadeUsuario - amigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log("A diferença de idade entre você e o seu amigo é de  :", amigo)
    // Programa 2

let nPar = prompt("Digite um numero Par")
let calculo = nPar % 2
console.log(` O resto da divisão de ${nPar} dividido por 2 é igual ${calculo}`)

    // Programa 3
let idadeAnos = Number (prompt("Quantos anos você tem?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos  * 365
let idadeHora = idadeAnos  * idadeDias

console.log("A sua idade em meses é", idadeMeses)
console.log("A sua idade em dias é", idadeDias)
console.log("A su idade em horas é", idadeHora)

    //Programa 4

let numero1 = Number(prompt ("Digite um numero"))
let numero2 = Number (prompt("Digite outro numero"))

const resMaior = numero1 > numero2
const resIgual = numero1 == numero2
const resDivi = Boolean(numero1 / numero2)

console.log("O primeiro numero é maior que segundo?", resMaior)
console.log("O primeiro numero é igual ao segundo?", resIgual)
console.log("O primeiro numero é divisivel pelo primeiro?", resDivi)
