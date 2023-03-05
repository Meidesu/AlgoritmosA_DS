import { question } from "readline-sync";

/*Leia um número inteiro de minutos, calcule e escreva quantos dias, 
quantas horas e quantos minutos ele corresponde.*/

console.log('Calcule o equivalente de x minutos em dias, horas e minutos:')

const tt_min = Number(question('Informe a quantidade de minutos: '))

const dias = Math.trunc(tt_min / 1440)
const horas =  Math.trunc(tt_min % 1440 / 60)
const min = tt_min % 1440 % 60

console.log(`Equivale a: ${dias}dia(s), ${horas}hora(s) e ${min}minuto(s)`)