import { question } from "readline-sync";

/*Leia uma temperatura em °F, calcule e escreva a equivalente em °C. 
(t°C = (5 * t°F - 160) / 9).*/

console.log('Transforme de fahrenheit para celsius:')

const fah = Number(question('Temperatura em grau fahrenheit: '))

const celEq = (5 * fah - 160)/ 9

console.log(`Equivalente em celsius: ${celEq}`)