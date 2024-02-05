console.log("Exercício 9:");

// Defina o valor de n
let n = 5; // Altere o valor de n conforme necessário

// Garanta que n é maior que 1
const numbers = [10, 9, 3, 11, 68, 16, 102, 8, 30, 21];

if (n > 1) {
  // Loop para percorrer as linhas
  for (let i = 1; i <= n; i++) {
    // String para armazenar uma linha do quadrado
    let linha = "";

    // Loop para percorrer as colunas
    for (let j = 1; j <= n; j++) {
      linha += "* "; // Adiciona um asterisco e um espaço
    }

    // Imprime a linha do quadrado
    console.log(linha);
  }
} else {
  console.log("O valor de n deve ser maior que 1.");
}
