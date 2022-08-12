type born = {
    day: number | string,
    month: number | string,
    year: number | string
}

function dadosPessoais () {
    const name: string = "Joao Pedro"
    const nascimento: born = {
        day: 1,
        month: "novembro",
        year: 1993
    }
    console.log(`Olá me chamo ${name}, nasci no dia ${nascimento.day} do mês de ${nascimento.month} do ano de ${nascimento.year}`)
}

dadosPessoais()