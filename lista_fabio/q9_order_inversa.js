import { question } from "readline-sync";

/*
Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
*/

const num1 = Number(question('Primeiro numero: '))
const num2 = Number(question('Segundo numero: '))

console.log('Ordem inversa:',num2, num1)