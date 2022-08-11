function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length,
    };
    return estatisticas;
}
const arrayNum = [3, 6, 1, 9, 6];
console.log(obterEstatisticas(arrayNum));
//# sourceMappingURL=exercicio2.js.map