import { question } from "readline-sync";

/*Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.*/

const num = Number(question('Numero binario de 4 digitos: '))

const dig_1 = Math.trunc(num / 1000)
const dig_2 = Math.trunc(num%1000/100)
const dig_3 = Math.trunc(num%1000%100/10)
const dig_4 = num%10

const dec = (dig_1 * 8) + (dig_2 * 4) + (dig_3 * 2) + (dig_4 * 1)

console.log(`Equivale a ${dec} na base decimal`)
