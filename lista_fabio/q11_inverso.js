import { question } from "readline-sync";
/*Leia um número inteiro (3 dígitos) e escreva o inverso do número. 
(Ex.: número = 532 ; inverso = 235)*/

console.log('Inverter a ordem dos algarismos de um numero: ')

const num = Number(question('Insira um numero com 3 digitos: '))

const centenas = Math.trunc(num / 100)
const dezenas = Math.trunc(num%100/10)
const unidades = num%10

console.log(`Numero inverso: ${unidades}${dezenas}${centenas}`)