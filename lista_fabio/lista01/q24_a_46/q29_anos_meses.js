import { question } from "readline-sync";

/*Leia um número inteiro de meses, calcule e escreva quantos anos e 
quantos meses ele corresponde.*/

console.log('Calcule o equivalente de x meses em anos e meses:')

const tt_meses = Number(question('Informe a quantidade de meses: '))

const anos = Math.trunc(tt_meses / 12)
const meses = tt_meses % 12

console.log(`Equivale a: ${anos}ano(s) e ${meses}mes(es)`)