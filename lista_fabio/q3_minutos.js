import { question } from "readline-sync";

//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
console.log('Transforme minutos em Horas.')

const inputMin = Number(question('Informe os minutos: '))

const horas = Math.trunc(inputMin/60)
const min = inputMin%60

console.log(`Equivalente em horas: ${horas}h${min}min`)