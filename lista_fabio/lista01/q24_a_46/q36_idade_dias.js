import { question } from "readline-sync";

/*Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.*/

console.log('Informe a sua idade:')

const anos = Number(question('Anos: '))
const meses = Number(question('Meses: '))
const dias = Number(question('dias: '))

const anos_dias = anos * 365
const meses_dias = meses * 30

const tt_dias = anos_dias + meses_dias + dias

console.log(`Total em dias: ${tt_dias} dias`)