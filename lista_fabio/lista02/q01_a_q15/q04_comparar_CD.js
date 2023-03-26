import { question } from "readline-sync";

/* Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

function main() {
  const num = input('Insira um numero com dois algarismos: ')

  const comparar = comparar_digitos(num) 

  print(comparar)
}

function comparar_digitos(num) {
  const dezena = Math.trunc(num % 100 / 10)
  const unidade = num % 10

  if (dezena == unidade) {
    return `A dezena é igual a unidade`
  }

  return `A dezena e a unidade são diferentes`
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