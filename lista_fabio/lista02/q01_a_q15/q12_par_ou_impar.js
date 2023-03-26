import { question } from "readline-sync";

/* Leia 1 (um) número inteiro e escreva se este número é par ou impar. */

function main() {
  print('-----------------------------------------------------------------\n')
  print('-----------> Verificar numero par ou impar <-----------')
  const num  = input('Informe um numero: ')

  const par_impar = par_ou_impar(num)

  print(`O numero é ${par_impar}`)
  print('\n-----------------------------------------------------------------')
}

function par_ou_impar(num) {
  if (num % 2 == 0) {
    return `par`
  } else {
    return `impar`
  }
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