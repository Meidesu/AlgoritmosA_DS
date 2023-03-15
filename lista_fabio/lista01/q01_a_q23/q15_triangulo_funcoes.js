import { question } from "readline-sync";

/* Leia o valor da base e altura de um triângulo, 
calcule e escreva sua área. 
(área=(base * altura)/2)  */

function main() {
  console.log('-----------------------------------------------------------------')
  console.log('Calculo de area de um triangulo:')

  const base = Number(question('Valor da base: '))
  const altura = Number(question('Valor da altura: '))

  const area = calc_area_triangulo(base, altura)
  
  console.log(`Area do triangulo: ${area}`)

  console.log('-----------------------------------------------------------------')
}

function calc_area_triangulo(base, altura) {
  const area = (base * altura)/2

  return area
}

main()