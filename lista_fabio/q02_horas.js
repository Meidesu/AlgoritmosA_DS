import { question } from "readline-sync";
/*
Leia um valor em horas e um valor em minutos, calcule e escreva 
o equivalente em minutos.
*/
console.log('Transforme horas para minutos.')

//entrada
const horas = Number(question('Informe as horas: '))
const min = Number(question('Informe os minutos: '))

//processamento
const minEq = horas * 60 + min

//saida
console.log(`Minutos equivalentes: ${minEq} min`)