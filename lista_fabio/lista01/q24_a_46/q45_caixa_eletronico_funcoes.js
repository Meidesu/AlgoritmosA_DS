import { question } from "readline-sync";

function main() {
  console.log('-----------------------------------------------------------------\n')
  const valor = Number(question('Informe um valor: '))

  const distribuição = distribuição_notas(valor)

  console.log(`${distribuição}`)

  console.log('\n-----------------------------------------------------------------')
}

function distribuição_notas(valor) {
  const notas_100 = Math.trunc(valor/100)
  const notas_50 = Math.trunc(valor%100/50)
  const notas_20 = Math.trunc(valor%100%50/20)
  const notas_10 = Math.trunc(valor%100%50%20/10)
  const notas_05 = Math.trunc(valor%100%50%20%10/5)
  const notas_02 = Math.trunc(valor%100%50%20%10%5/2)
  const notas_01 = Math.trunc(valor%100%50%20%10%5%2/1)

  return `
  R$${valor}:
  ${notas_100} notas(s) de R$ 100,00
  ${notas_50} notas(s) de R$ 50,00
  ${notas_20} notas(s) de R$ 20,00
  ${notas_10} notas(s) de R$ 10,00
  ${notas_05} notas(s) de R$ 5,00
  ${notas_02} notas(s) de R$ 2,00
  ${notas_01} notas(s) de R$ 1,00`
}

main()

/*Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/