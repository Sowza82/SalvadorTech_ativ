const numeros = [10, 9, 11, 68, 16, 102, 8, 30, 21];
let maiorNumero = numeros[0];

for ( i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log("O maior número é: " + maiorNumero);