import { question } from "readline-sync";

/*Leia 3 notas de um aluno e o peso de cada nota, 
calcule e escreva a média ponderada.*/
console.log('Media ponderada de 3 notas com seus pesos:')

const nota1 = Number(question('Primeira nota: '))
const pesoN1= Number(question('Peso da nota: '))

const nota2 = Number(question('Segunda nota: '))
const pesoN2= Number(question('Peso da nota: '))

const nota3 = Number(question('Terceira nota: '))
const pesoN3= Number(question('Peso da nota: '))

const media = (nota1*pesoN1 + nota2*pesoN2 + nota3*pesoN3) / (pesoN1+pesoN2+pesoN3)

console.log(`Media ponderada das notas: ${media}`)

