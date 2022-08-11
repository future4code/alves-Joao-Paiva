const minhaString = "Harry Potter";
console.log(minhaString);
const meuNumero = 10;
var corFavorita;
(function (corFavorita) {
    corFavorita["PRETO"] = "preto";
    corFavorita["AZUL"] = "azul";
    corFavorita["AMARELO"] = "amarelo";
    corFavorita["VERMELHO"] = "vermelho";
    corFavorita["VERDE"] = "verde";
    corFavorita["LARANJA"] = "laranja";
})(corFavorita || (corFavorita = {}));
const Pessoa1 = {
    nome: "Joao Pedro",
    idade: 28,
    corFavorita: corFavorita.PRETO
};
const Pessoa2 = {
    nome: "Jonas",
    idade: 27,
    corFavorita: corFavorita.VERDE
};
const Pessoa3 = {
    nome: "Carlitus",
    idade: 93,
    corFavorita: corFavorita.AZUL
};
console.table({ Pessoa1, Pessoa2, Pessoa3 });
//# sourceMappingURL=exercicio1.js.map