import { question } from "readline-sync";

const valor = Number(question('Informe um valor: '))

let notas_100 = Math.trunc(valor/100)
let notas_50 = Math.trunc(valor%100/50)
let notas_20 = Math.trunc(valor%100%50/20)
let notas_10 = Math.trunc(valor%100%50%20/10)
let notas_05 = Math.trunc(valor%100%50%20%10/5)
let notas_02 = Math.trunc(valor%100%50%20%10%5/2)
let notas_01 = Math.trunc(valor%100%50%20%10%5%2/1)

console.log(`${valor}`)
console.log(`${notas_100} notas(s) de R$ 100,00`)
console.log(`${notas_50} notas(s) de R$ 50,00`)
console.log(`${notas_20} notas(s) de R$ 20,00`)
console.log(`${notas_10} notas(s) de R$ 10,00`)
console.log(`${notas_05} notas(s) de R$ 5,00`)
console.log(`${notas_02} notas(s) de R$ 2,00`)
console.log(`${notas_01} notas(s) de R$ 1,00`)

console.log(``)


/*Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/