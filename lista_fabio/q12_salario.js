import { question } from "readline-sync";

/*Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.*/

console.log('Calcule um aumento de 25% no salario:')

const salario = Number(question('Informe o seu salario: R$'))

const aumento = 0.25 * salario

const novoSalario = aumento + salario

console.log(`Seu novo salario: R$${novoSalario}`)