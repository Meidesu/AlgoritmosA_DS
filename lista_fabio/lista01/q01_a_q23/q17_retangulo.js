import { question } from "readline-sync";

/*Leia o valor da base e altura de um retângulo, calcule e escreva sua área. 
(área = base * altura)*/

console.log('Calcule a area de um retangulo:')

const base = Number(question('Base do retangulo: '))
const altura = Number(question('Altura do retangulo: '))

const area = base * altura

console.log(`Area do retangulo: ${area}`)