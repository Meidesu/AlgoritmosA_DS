import { question } from "readline-sync";

/*Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
D = (R + S)/2, sendo: R = (A + B)**2 e S = (B + C)**2
*/

console.log('Informe 3 numeros:')

const A = Number(question('Primeiro numero'))
const B = Number(question('Segundo numero'))
const C = Number(question('Terceiro numero'))

const R = (A + B)**2
const S = (B + C)**2
const D = (R + S)/2

console.log(`Resultado: ${D}`)