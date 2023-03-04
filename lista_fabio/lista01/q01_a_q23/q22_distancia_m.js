import { question } from "readline-sync";

/*Leia um valor em km, calcule e escreva o equivalente em m.*/

console.log('Transforme de Km para metros:')

const km = Number(question('Valor em Km: '))

const metros = km * 1000

console.log(`Equivalente em metros: ${metros}m`)