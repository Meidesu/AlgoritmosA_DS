import { question } from "readline-sync";

/*Leia um número inteiro de horas, calcule e escreva quantas semanas, 
quantos dias e quantas horas ele corresponde.*/

console.log('Calcule o equivalente de x horas em semanas, dias e horas:')

const tt_hr = Number(question('Informe a quantidade de horas: '))

const sem = Math.trunc(tt_hr / 178)
const dias = Math.trunc(tt_hr % 178 / 24)
const horas = tt_hr % 178 % 24

console.log(`Equivale a: ${sem}semana(s), ${dias}dia(s) e ${horas}hora(s)`)