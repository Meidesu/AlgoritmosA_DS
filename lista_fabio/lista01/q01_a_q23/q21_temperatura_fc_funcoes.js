import { question } from "readline-sync";

/*Leia uma temperatura em °F, calcule e escreva a equivalente em °C. 
(t°C = (5 * t°F - 160) / 9).*/

function main() {
  console.log('-----------------------------------------------------------------')
  console.log('Transforme de fahrenheit para celsius:')

  const fahr = Number(question('Temperatura em grau fahrenheit: '))

  const celEq = fahrenheit_para_celsius(fahr)

  console.log(`Equivalente em celsius: ${celEq}`)

  console.log('-----------------------------------------------------------------')
}

function fahrenheit_para_celsius(temperatura){
  const celEq = (5 * temperatura - 160)/ 9

  return celEq.toFixed(2)
}
main()