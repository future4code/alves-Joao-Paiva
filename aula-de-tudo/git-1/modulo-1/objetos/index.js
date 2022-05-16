// Exercícios de interpretação de código

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// AO EXECUTAR  O PROGRAMA SERÁ IMPRESSO (MATHEUS NACHTERGAELE, VIRGINIA CAVENDISH, O CANAL É GLOBO HORARIO AS 14H.)
 
// ======================================================================================================================

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// AO EXECUTAR O PROGRAMA SERÁ IMPRESSO 
// A) O que vai ser impresso no console?
// IRA IMPRIMIR NOME: JUCA, IDADE: 3, RAÇA: SRD.
// O CACHORRO PASSOU A SER GATO COM NOME: DE JUBA, IDADE: 3, E RAÇA: SRD.
// AS LETRAS "A" FORAM SUBSTITUIDAS  POR "O", FICANDO NOME: JUBO, IDADE, 3, RAÇA: SRD

//B)O que faz a sintaxe dos três pontos antes do nome de um objeto?

// CHAMADA DE ESPALHAMENTO OU SPREAD, SERVE PARA COPIAR PRORIEDADES DE OBJETOS SUBESCRITAS.

//=============================================================================================

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//A) AO EXECUTAR O PROGRAMA SERÁ IMPRESSO,  "FALSE"
// B) Explique o valor impresso no console. Você sabe por que isso aconteceu?




//=============================================================================================

// Exercícios de escrita de código

// 1. Resolva os passos a seguir: 

// Exemplo de entrada
const namorado = {
    nome: "Jonas", 
    apelidos: ["Paca", "Joninha", "Amendoin"]
 }
 function mensagem(frase) {
     console.log(`Eu sou ${frase.nome}, mas pode me chamar de: ${frase.apelidos[0]}, ${frase.apelidos[1]} ou ${frase.apelidos[2]}`)
 }
 // Exemplo de saída
 mensagem(namorado)
 // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
 const namorado2 = {
 copiaDeNamorado = [...namorado]
 apelidos = ["Esticado", "Flechinha", "Tronquin"]

}
mensagem(namorado2)


//=====================================================================

// 2 Resolva os passos a seguir: 

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
 const objetos = {
     Nome: "Pedro"
     Idade:"28"
     Profissao:"Enfermeiro"
 }
 function funcao(Nome, idade, profissão) {
     return objetos
 }

console.log(funcao.length)

