import { question } from "readline-sync";

/*Leia um número inteiro (3 dígitos), calcule e escreva a diferença 
entre o número e seu inverso.*/

const num = Number(question('Informe um numero com 3 digitos: '))

const centenas = Math.trunc(num / 100)
const dezenas = Math.trunc(num%100/10)
const unidades = num%10

const diff = num - (unidades * 100 + dezenas * 10 + centenas)

console.log(`Diferença do numero pelo inverso: ${diff}`)