
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(1, 3))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {
    return a > b
}
console.log(verificaSeEMaior(321, 2156));
// false

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const cadastroPosto =()=> {
    let nomeDoUsuario = prompt("Qual é seu nome?")
    let anoDeNascimento = prompt("Qual ano você nasceu?")
    let senhaDoUsuario = prompt ("Digite uma senha de no minimo 6 caracteres")
    let nacionalidade = prompt ("Você é Brasileira(o)")
    let anoAtual = new Date().getFullYear();
    let deMaior = anoAtual - nomeDoUsuario;
    if (deMaior >= 18){
        console.log("Você pode se cadastrar!")
    } if (senhaDoUsuario.length < 6) {
        console.log("Você pode se cadastrar!")
    } if (nacionalidade === "Sim") {
        console.log("Você pode se cadastrar!")
    } else {
        console.log("Você não pode se cadastrar!")
    }
}
cadastroPosto()
    





// Exercício 4-----------------------------------------------------------------------------------------------


const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
 const senhaA = prompt("Digite a senha")
 const senhaB = prompt ("Confirme a senha")
 login = senha [senhaA, senhaB]
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());










/*const nomeDoUsuario = prompt("Qual é seu nome completo?")
const anoDeNascimento  = Number (prompt("Qual seu ano de nascimento?"))
const senhaDoUsuario =  (prompt("Digite sua senha com 6 digitos"))
const nacionalidade = prompt("Qual sua nacionalidade?")


let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let deMaior = (anoDeNascimento - anoAtual)

let cadastrosatanas = function( usuario) {
    if (deMaior >= 18 && senhaDoUsuario.length < 6) {
        console.log("Você pode se cadastrar!")

    } else {
        console.log("Você não pode se cadastrar!")
    } return usuario.deMaior
} 


     

console.log(usuario);*/ 



function cadastroUsuario (nomeUsuario, anoDeNascimento,senhaUsuario, nacionalidade) {
    nomeUsuario = prompt ("Qual o seu nome?")
    anoDeNascimento = Number( prompt (" Em que ano vc nasceu?"))
    senhaUsuario = prompt (" Digite a sua senha")
    nacionalidade = prompt ("Digite a sua nacionalidade")
    return cadastroUsuario }
    let arrayUsuario = [ cadastroUsuario]