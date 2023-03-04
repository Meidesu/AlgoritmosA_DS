import { question } from "readline-sync";

/*Leia uma temperatura em °C, calcule e escreva a equivalente em °F. 
(t°F = (9 * t°C + 160) / 5)*/

console.log('Transforme de celsius para fahrenheit:')

const celsius = Number(question('Temperatura em grau celsius: '))

const fahEq = (9 * celsius + 160)/ 5

console.log(`Equivalente em fahrenheit: ${fahEq}`)