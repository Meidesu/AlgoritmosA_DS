import { question } from "readline-sync";

/*Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.
(c = 2 * p * r)*/

console.log(`Comprimento da circunferencia: ${circ.toFixed(2)}`)

function main() {
  console.log('-----------------------------------------------------------------')
  console.log('Calcule o comprimento de uma circunferência:')

  const raio = Number(question('Raio da circunferencia: '))
  const pi = 3.14

  const circ = calc_comprimento_circulo(raio, pi)

  console.log(`Comprimento da circunferencia: ${circ}`)

  console.log('-----------------------------------------------------------------')
}

function calc_comprimento_circulo(raio, pi) {

  const circ = raio * pi * 2

  return circ.toFixed(2)
}

main()