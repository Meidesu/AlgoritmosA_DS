import { question } from "readline-sync";

/*Leia um valor em m, calcule e escreva o equivalente em cm.*/

console.log('Transforme de metro para centimetro:')

const metro = Number(question('Valor em metro: '))

const cm = metro * 100

console.log(`Equivalente em centimetro: ${cm}cm`)