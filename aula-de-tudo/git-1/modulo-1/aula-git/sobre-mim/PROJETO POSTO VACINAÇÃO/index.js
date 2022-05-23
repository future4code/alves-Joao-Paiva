
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
const cadastro = () => {
    const usuario = []
  let  nomePaciente = prompt("Qual seu nome")
  let  nascimentoPaciente = Number(prompt("Qual o ano do seu nascimento"))
  let senhaPaciente = prompt("Digite sua senha")
  let  nacionalidadePacaiente = prompt("Qual sua nacionalidade?")

    let idadeP = 2022 - nascimentoPaciente
    usuario.push(nomePaciente, nascimentoPaciente, senhaPaciente, nacionalidadePacaiente)

    if (usuario[2].length > 6 && idadeP >= 18 && usuario[3] === "brasileiro") {
        console.log("Cadastro realizado com sucesso")
    }
    else {
        console.log("Cadastro não realizado")
    }
}
console.log(cadastro())




// Exercício 4-----------------------------------------------------------------------------------------------


const login = () => {
    const login = "labenu"
    
    let senha = prompt("Digite a senha")
  if (login == senha){
      console.log("Usuário Logado")
  }
  else {
      console.log("Senha Inválida")
  }
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------
const primeiraDose = () => {
    const pacienteP = prompt ("Nome do usuário")
    const vacinaP = prompt ("Qual vacina você tomou")
    
    const coronavac = "Coronavac"
    const Astrazeneca = "Astrazaneca"
    const pfizer = "Pfizer"
   
    if (vacinaP === coronavac.toUpperCase()) {
    let data = new Date()
    let tempoCoronavac = 28 
    data.setDate(data.getDate() + tempoCoronavac)
    console.log(`Olá ${pacienteP}! A próxima dose da ${vacina} é daqui a ${tempoCoronavac} dias. Compareça no posto na data ${data}.`)
    } 
    if (vacinaP === Astrazeneca.toUpperCase()) {
    let data1 = new Date()
    let tempoAstrazeneca = 90
    data1.setDate(data1.getDate() + tempoAstrazeneca)
    console.log(`Olá ${pacienteP}! A próxima dose da ${vacina} é daqui a ${tempoAstrazeneca} dias. Compareça no posto na data ${data1}.`)
    }
   if (vacinaP === pfizer.toUpperCase()) {
   let data2 = new Date()
   let tempoPfizer = 90
   data2.setDate(data2.getDate() + tempoPfizer)
   console.log(`Olá ${pacienteP}! A próxima dose da ${vacina} é daqui a ${tempoPfizer} dias. Compareça no posto na data ${data1}.`)
   }
   else {
       console.log(`${pacienteP} sua vacina esta errada`)
   }
     
   
   
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

    console.log(usuarios[1].imunizacao.replace("incompleta", "completa"))


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = atraso.filter((vacina) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    let imunizacao = [
        { completa: "completa" },
        { incompleta: "incompleta"}
    ]

    if (usuarios[0].imunizacao == "completa") {
        console.log(`Olá ${usuarios[0].nome}, "sua imunização está" ${imunizacao[1].incompleta}!`)
    } else {
        console.log (`Olá ${usuarios[0].nome}! Sua imunização está ${imunizacao[1].incompleta} , por favor volte ao postinho para tomar a segunda dose.`)
    }

    if (usuarios[1].imunizacao == "completa") {
        console.log(`Olá ${usuarios[1].nome}, sua imunização está ${imunizacao[0].completa}!`)
    } else {
        console.log (`Olá ${usuarios[1].nome}! Sua imunização está ${imunizacao[1].incompleta}, por favor volte ao postinho para tomar a segunda dose.`)
    }

    if (usuarios[2].imunizacao == "completa") {
        console.log(`Olá ${usuarios[2].nome}, sua imunização está ${imunizacao[1].incompleta}!`)
    } else {
        console.log (`Olá ${usuarios[2].nome}! Sua imunização está ${imunizacao[1].incompleta} , por favor volte ao postinho para tomar a segunda dose.`)
    }


})
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


































