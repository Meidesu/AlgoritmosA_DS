import { question } from "readline-sync";

/* Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo. */

function main() {
  print('-----------------------------------------------------------------\n')
  const num = input('Informe um numero de 0 a 100: ')

  if (num >= 0 && num <=100) {
    const num_primo = verificar_primo(num)
    print(`O numero ${num} ${num_primo}`)
  } else {
    print('Informe um numero válido')
  }

    print('\n-----------------------------------------------------------------')
}

function verificar_primo(num) {
  if ( num % 2 == 0 ){
    if ( num == 2 ) {
      return `eh primo`
    } else {
      return `não eh primo`
    }
  } else if ( num == 1) {
    return `não eh primo`
  } else if ( num == 3 || num == 5 || num == 7 || num == 11) {
    return `eh primo`
  } else if ( num == 3 % 3 == 0) {
    return `não eh primo`
  } else if( num % 5 == 0 ) {
    return `não eh primo`
  } else if( num % 7 == 0 ) {
    return `não eh primo`
  } else if( num % 11 == 0 ) {
    return `não eh primo`
  } else {
   return `eh primo`
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