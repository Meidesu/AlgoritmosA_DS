import { question } from "readline-sync";
/*
Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
*/
console.log('Informe dois numeros:')

const num1 = Number(question('Primeiro numero: '))
const num2 = Number(question('Segundo numero: '))

const div = (num1+num2) / (num1-num2)

console.log('Divisão da soma pela subtração:',div)