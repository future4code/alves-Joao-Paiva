// Atividade 1
let a = 10 
let b = 10
console.log(b)
// ao executar o programa será impesso somente let b.

b = 5
console.log(a, b) 
//ao executar o programa será impresso let a e let b

// Atividade 2

/*let a = 10*/
/*let b = 20*/
c = a 
b = c
a = b
console.log(a, b, c)
// ao executar o programa será impresso  let b, e c, let a informara um erro, pois o mesmo ja existe
// uma variavel com a mesma declaracao de valor feito.

// Atividade 3
let p = 6.20 = prompt ("Quantas horas você trabalha por dia ?")
let t = 2.50 = prompt ("Quanto você recebe por dia ?")
alert ('você recebe ${t/p} por hora') 
//-------------------------------------------------------
//Atividade de escreita de códigos

let nome = undefined
let idade = undefined

console.log(typeof nome, typeof idade)
// ao executar o programa as variaveis seram impressa como strings, o valor da mesma é em texto.
//-----------------------
console.log("Ola", nome,"você tem", idade, "anos" )
// Os valores de nome e idade foram escrito no prompt.
//--------------------------------------

const voceEmedico = prompt ("Você é Medico? ")
const cirurgiaoDentista = prompt ("Você é Dentista?")
const medicoVeterianario = prompt ("Você é Veterinario?") 

console.log(voceEmedico, cirurgiaoDentista, medicoVeterianario)

// -----------------------------------------//---------------------------------//
// Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25
let c = undefined

c = a // = 10
a = b // = 25
b = c // = 10
//