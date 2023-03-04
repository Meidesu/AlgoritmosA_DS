import { question } from "readline-sync";

/*Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).*/

console.log('Transforme de Kg para gramas:')

const kg = Number(question('Valor em Kg: '))

const gramas = kg * 1000

console.log(`Equivalente em gramas: ${gramas}g`)