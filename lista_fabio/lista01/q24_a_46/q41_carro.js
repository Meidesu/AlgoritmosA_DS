import { question } from "readline-sync";

/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/

const cust_fab = Number(question('Informe o preço de fabrica do carro: '))

const aumento = (cust_fab * 0.28) + (cust_fab * 0.45)
const valor_final = aumento + cust_fab

console.log(`O valor final é: R$${valor_final.toFixed(2)}`)