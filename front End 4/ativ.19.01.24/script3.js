const numbers = [10, 9 , 3, 11, 68, 16, 102, 8, 30, 21];

let Menor = numbers[0]

for (let index = 1; index <= (numbers.length - 1); index ++) {
    if (numbers[index] < Menor) {
        Menor = numbers[index]
    }
}

console.log(Menor)