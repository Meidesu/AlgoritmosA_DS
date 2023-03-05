import { question } from "readline-sync";

/*Leia um número inteiro de metros, calcule e escreva quantos Km e 
quantos metros ele corresponde.*/

console.log('Transforme de metros para km:')

const metros = Number(question('Valor em metros: '))

const km = metros / 1000

console.log(`Equivalente em km: ${km}km`)