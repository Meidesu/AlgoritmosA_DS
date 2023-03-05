import { question } from "readline-sync";

/*Leia um número inteiro de segundos, calcule e escreva quantas horas, 
quantos minutos e quantos segundos ele corresponde.*/

console.log('Calcule o equivalente de x segundos em horas, minutos e segundos:')

const tt_seg = Number(question('Informe a quantidade de segundos: '))

const horas = Math.trunc(tt_seg / 3600)
const min = Math.trunc(tt_seg % 3600 / 60)
const seg = tt_seg % 3600 % 60

console.log(`Equivale a: ${horas}h${min}min e ${seg}s`)