import { question } from "readline-sync";

/*Leia 3 números, calcule e escreva a média dos números.*/

const num1 = Number(question('primeiro numero: '))
const num2 = Number(question('segundo numero: '))
const num3 = Number(question('terceiro numero: '))

const media = ((num1 + num2 + num3 )/3)

console.log(`Media dos 3 numeros: ${media.toFixed(2)}`)