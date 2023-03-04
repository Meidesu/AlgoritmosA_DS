import { question } from "readline-sync";

/*Leia o valor do dólar e um valor em dólar, 
calcule e escreva o equivalente em real (R$).*/

console.log('Transforme dolar para real')

//entrada
const valDolar = Number(question('Informe o valor do dolar: R$'))
const dolar = Number(question('Informe um valor em dolar: US$'))

//processamento
const realEq = valDolar * dolar

//saida
console.log(`Equivalente em real: R$${realEq.toFixed(2)}`)