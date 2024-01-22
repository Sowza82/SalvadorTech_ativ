const numbers = [10, 9, 3, 11, 68, 16, 102, 8, 30, 21];

console.log("\nExercício 6:");
let quantidadeImpares = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    quantidadeImpares++;
  }
}

if (quantidadeImpares > 0) {
  console.log("Quantidade de valores ímpares: " + quantidadeImpares);
} else {
  console.log("Nenhum valor ímpar encontrado");
}
