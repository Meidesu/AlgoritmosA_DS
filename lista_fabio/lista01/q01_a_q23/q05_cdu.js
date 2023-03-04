import { question } from "readline-sync";

/*
Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus 
elementos (C + D + U).
*/

console.log('Somar os elementos de um numero de 3 digitos.(C + D + U)')

const num = Number(question('Informe um numero com 3 digitos: '))

const centenas = Math.trunc(num / 100)
const dezenas = Math.trunc(num%100/10)
const unidades = num%10

console.log(`Soma (C+D+U): ${centenas+dezenas+unidades}`)