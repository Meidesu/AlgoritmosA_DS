import { question } from "readline-sync";

/* Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos. */

function main() {
  print('-----------------------------------------------------------------\n')
  print('-----------> CALCULADORA <-----------')
  print(`
  Informe dois valores e uma das operações:
  1 - Adição;
  2 - Subtração;
  3 - Multiplicação;
  4 - Divisão. `)

  const valor1 = input('Valor 1: ')
  const valor2 = input('Valor 2: ')
  const operador = input('Operacao: ')

  if ( operador == 4 && valor2 == 0 ) {
    print('\n##### Informe um denominaddor diferente de 0 #####\n')
    return
  }

  const resultado = calculadora(valor1, valor2, operador)

  print(`\nResultado: ${resultado}`)
  print('\n-----------------------------------------------------------------')
}

function calculadora(v1, v2, operador) {
  if (operador == 1) {
    return v1 + v2
  } else if (operador == 2) {
    return v1 - v2
  } else if (operador == 3) {
    return v1 * v2
  } else {
    return v1 / v2
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