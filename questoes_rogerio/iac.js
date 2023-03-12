import { question } from "readline-sync";

/*O índice de adiposidade corporal é um método usado para calcular a quantidade de gordura corporal, 
utilizando as medidas da cintura e do quadril */

function main() {
  print('-----------------------------------------------------------------')

  print('  Calculo do indice de adiposidade coporal(IAC): \n')
  
  const quadril = input('  Informe a medida do quadril(cm): ')
  const altura = input('  Informe a sua altura(metro): ')

  const iac = calc_iac(quadril, altura) 
  const faixa_quadril = quadril_ideal(altura)

  print(
  `
  Seu IAC é: ${iac}  

**Mantenha sua cintura com medida entre ${faixa_quadril} para manter seu IAC na faixa normal**
  `)

  print('-----------------------------------------------------------------')
}

function calc_iac(quadril, altura) {
  const iac = (quadril / (altura * Math.sqrt(altura))) - 18

  return iac.toFixed(2)
}

function quadril_ideal(altura) {
  const quadril_max = 38.9 * (altura *  Math.sqrt(altura))
  const quadril_min = 27 * (altura *  Math.sqrt(altura))

  return `${quadril_min.toFixed(2)} - ${quadril_max.toFixed(2)}cm`
}


function input(cont) {
  const input = Number(question(cont))

  return input
}

function print(cont) {
  const print = console.log(cont)

  return print
}

main()