import { question } from "readline-sync";

/*Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos,
meses e dias.*/

console.log('Calcule o equivalente da sua idade em anos, meses e dias:')

const tt_dias = Number(question('Informe a idade em dias: '))

const anos = Math.trunc(tt_dias / 365)
const meses = Math.trunc(tt_dias % 365 / 30)
const dias = tt_dias % 365 % 30

console.log(`Equivale a: ${anos}ano(s), ${meses}mes(es) e ${dias} dia(s)`)