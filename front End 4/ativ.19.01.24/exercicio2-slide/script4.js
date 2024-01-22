const numbers = [10, 9, 3, 11, 68, 16, 102, 8, 30, 21];

console.log("\nExercício 4:");
let maiorValor = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}
console.log("Maior valor: " + maiorValor);
