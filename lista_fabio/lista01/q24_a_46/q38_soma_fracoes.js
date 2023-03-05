import { question } from "readline-sync";

/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas 
frações, escrevendo o resultado em forma de fração.*/

const num1 = Number(question('Numerador 1: '))
const den1 = Number(question('Denominador 1: '))
const num2 = Number(question('Numerador 2: '))
const den2 = Number(question('Denominador 2: '))

const denominador = den1 * den2
const numerador = ((denominador/den1)*num1) + ((denominador/den2)*num2)

console.log(`Resultado: ${numerador}/${denominador}`)