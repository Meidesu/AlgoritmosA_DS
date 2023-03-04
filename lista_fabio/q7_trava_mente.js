import { question } from "readline-sync";

/*
Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
*/
console.log('Informe tres numeros:')
const num1 = Number(question('Primeiro numero: '))
const num2 = Number(question('Segundo numero: '))
const num3 = Number(question('Terceiro numero: '))

const soma = num1 + num2
const diff = num2 - num3  

console.log(`Soma dos dois primeiros: ${soma}`)
console.log(`Diferença dos dois ultimos: ${diff}`)