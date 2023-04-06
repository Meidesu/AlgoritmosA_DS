import { question } from "readline-sync";

/* Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos. */


function main() {
  print('-----------------------------------------------------------------\n')
  
  const num1 = input('Primeiro numero: ')
  const num2 = input('Segundo numero: ')

  const resultado = isso_ali_que_foi_pedido(num1, num2)

  print(num1 % num2)
  print(resultado)
  print('\n-----------------------------------------------------------------')
}

function isso_ali_que_foi_pedido(num1, num2) {
  const resto = num1 % num2
  const soma = num1 + num2

  if ( resto == 1 ) {
    return `Soma dos numeros pelo resto = ${soma + resto}`
  } else if ( resto == 2 ) {
    return `${num1} é ${par_impar(num1)} e ${num2} é ${par_impar(num2)}`
  } else if ( resto == 3 ) {
    return `Multiplicação da soma pelo primeiro: ${soma * num1}`
  } else if ( resto == 4 ) {
    return `Divisão da soma pelo segundo: ${soma/num2}`
  } else {
    return `Quadrado dos numeros: 
    * ${num1} = ${num1**2};
    * ${num2} = ${num2**2} `
  }
}
/* 
* num1 % num2 == 1 -> num1 + num2 + (num1 % num2)
* num1 % num2 == 2 -> par ou impar
* num1 % num2 == 3 -> (num1 + num2) * num1
* num1 % num2 == 4 -> (num1 + num2) / num2, sendo num2 != 0
* qualquer outro cenario -> num1**2, num2**2
*/

function par_impar(num) {

  if (num % 2 == 0) {
    return "par"
  } else {
    return "impar"
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