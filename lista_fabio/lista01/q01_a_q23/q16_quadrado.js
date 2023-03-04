import { question } from "readline-sync";

/* Leia o valor do lado de um quadrado, calcule e escreva sua área. 
(área = lado2) */

console.log('Calcule a area de um quadrado:')

const lado = Number(question('Lado do quadrado: '))

const area = lado**2

console.log(`Area do quadrado: ${area}`)