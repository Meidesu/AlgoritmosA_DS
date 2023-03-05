import { question } from "readline-sync";

/*Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que 
o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.*/

console.log('Somar os elementos de um numero de 4 digitos.')

const num = Number(question('Informe um numero com 4 digitos: '))


const uni_milhar = Math.trunc(num / 1000)
const centenas = Math.trunc(num%1000/100)
const dezenas = Math.trunc(num%1000%100/10)
const unidades = num%10

const soma = uni_milhar+centenas+dezenas+unidades

console.log(`Soma: ${soma}`)