import { question } from "readline-sync";

/*Leia um valor em m, calcule e escreva o equivalente em cm.*/

function main() {
  console.log('-----------------------------------------------------------------')
  console.log('Transforme de metro para centimetro:')

  const metro = Number(question('Valor em metro: '))

  const cm = metros_para_cm(metro)

  console.log(`Equivalente em centimetro: ${cm}cm`)

  console.log('-----------------------------------------------------------------')
}

function metros_para_cm(metro) {
  const cm = metro * 100

  return cm 
}

main()