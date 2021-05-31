//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
//sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPercorrido = 600;
let dias = 7;
const diaria = 60 * dias;
const kmRodado = 0.15 * kmPercorrido;
let total = diaria + kmRodado;

console.log(`O valor total por dia é ${diaria} e o valor por km rodado é ${kmRodado}, total: ${total}`)
