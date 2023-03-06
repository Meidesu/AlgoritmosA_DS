import { question } from "readline-sync";

/*Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: 
o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma 
carteira (1 carteira tem 20 cigarros).*/

const anos = Number(question('A quanto anos fuma: '))
const cigDia = Number(question('Quantos cigarros por dia: '))
const valor = Number(question('Preço da carteira de cigarros: '))

const gasto_tt = ((365 * anos) * cigDia) * valor

console.log(`Total gasto: R$${gasto_tt}`)