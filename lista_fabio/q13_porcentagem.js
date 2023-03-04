import { question } from "readline-sync";

/*Leia um valor em real (R$), calcule e escreva 70% deste valor.*/

console.log('Calcule 70% de um valor em real:')

const valor = Number(question('Informe um valor em real: R$'))

const porcentagem = valor * 0.70

console.log(`Resutado: ${porcentagem}`)