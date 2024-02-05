const numbers = [10, 9, 3, 11, 68, 16, 102, 8, 30, 21];

console.log("Exercício 8:");

// Palavra de exemplo
let palavra = "banana";

// Convertendo a string para um array de caracteres, invertendo e juntando novamente
let palavraInvertida = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

console.log("Palavra original:", palavra);
console.log("Palavra invertida:", palavraInvertida);
