import { cabecalho, input_num_positivo, print, rodape } from '../../io_utils_.js'

// feita em 56min e 22s 

function main() {
  cabecalho('CALCULAR GASTO EM PISCINA')
  
  print('Informe as dimensões da piscina em centimetros: ')

  const largura = input_num_positivo('> Largura: ')
  const altura = input_num_positivo('> Altura: ')
  const comprimento = input_num_positivo('> Comprimento: ')

  const nivel_max = calcular_nivel_maximo(largura, altura, comprimento)

  print(`\n* Sua piscina deve ter até ${nivel_max}L, equivalente a 85% da capacidade.`)

  const valor_1K_litro = input_num_positivo('> Informe o preco por 1000L em sua cidade(R$): ')

  const total_a_pagar = calcular_dispesa_total(valor_1K_litro, nivel_max)

  print(`\n* Total a pagar: R$${total_a_pagar}.`)

  const manutencao = valor_mensal_manutencao(nivel_max, valor_1K_litro)

  print(`
  * Naturalmente a sua piscina deve perder certas quantidades de água por mês.
  * O valor mensal de manutenção é R$${manutencao}. `)

  rodape()
}

function valor_mensal_manutencao(nivel_max, valor_1K_litro) {
  const nivel_perdido = nivel_max * 0.1
  const multiplicador = Math.ceil(nivel_perdido / 1000)

  return multiplicador * valor_1K_litro
}

function calcular_dispesa_total(valor_1K_litro, nivel_max) {
  const multiplicador = Math.ceil(nivel_max / 1000)
  
  return multiplicador * valor_1K_litro
}

function calcular_nivel_maximo(largura, altura, comprimento) {
  const cap_total = (largura * altura * comprimento) / 1000
  const nivel_max = cap_total * 0.85
  
  return nivel_max
}

main()