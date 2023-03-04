import { question } from "readline-sync";

/* Leia o valor da base e altura de um triângulo, 
calcule e escreva sua área. 
(área=(base * altura)/2)  */

console.log('Calculo de area de um triangulo:')

const base = Number(question('Valor da base: '))
const altura = Number(question('Valor da altura: '))

const area = (base * altura)/2

console.log(`Area do triangulo: ${area}`)