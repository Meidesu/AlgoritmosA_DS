import { question } from "readline-sync";

/*Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão
do 1º pelo 2º.*/

console.log('Divisão inteira de dois numeros:')

const num1 = Number(question('Primeiro numero: '))
const num2 = Number(question('Segundo numero: '))

const quociente = Math.trunc(num1/num2)
const resto = num1%num2

console.log(`
Resultado: ${quociente}
Resto: ${resto}     
`)