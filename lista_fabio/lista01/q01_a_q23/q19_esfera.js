import { question } from "readline-sync";

/*Leia o valor do raio de uma esfera, calcule e escreva seu volume. 
(v = (4 * p * r3) / 3) (p = 3,14)*/

console.log('Calcule o volume de uma esfera:')

const raio = Number(question('Raio da esfera: '))
const pi = 3.14

const vol = (4 * pi * raio**3)/3

console.log(`Volume da esfera: ${vol.toFixed(3)}`)