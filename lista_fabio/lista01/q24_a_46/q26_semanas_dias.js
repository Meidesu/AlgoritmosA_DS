import { question } from "readline-sync";

/*Leia um número inteiro de dias, calcule e escreva quantas semanas e 
quantos dias ele corresponde.*/

console.log('Transforme dias em semanas:')

const total_dias = Number(question('Informe os dias: '))

const sem = Math.trunc(total_dias/7)
const dias = total_dias%7

console.log(`Equivalente em semanas: ${sem} semana(s) e ${dias} dia(s).`)