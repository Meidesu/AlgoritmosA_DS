import { question } from "readline-sync";

/*Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes. */

function main() {
  print('-----------------------------------------------------------------\n')
  const num_1 = input('Primeiro numero: ')
  const num_2 = input('Segundo numero: ')
  const num_3 = input('Terceiro numero: ')
  const num_4 = input('Quarto numero: ')
  const num_5 = input('Quinto numero: ')

  const maior = maior_numero(num_1, num_2, num_3, num_4, num_5)
  const menor = menor_numero(num_1, num_2, num_3, num_4, num_5)

  print(`Dentre os 5 numeros, ${maior} é o maior numero e ${menor} é o menor.`)
  
  print('\n-----------------------------------------------------------------')
}

function menor_numero(n1, n2, n3, n4, n5) {
  if ( n1 <= n2 && n1 <= n3 && n1 <= n4 && n1 <= n5 ){
    return n1
  } else if ( n2 <= n1 && n2 <= n3 && n2 <= n4 && n2 <= n5 ) {
    return n2
  } else if (n3 <= n1 && n3 <= n2 && n3 <= n4 && n3 <= n5 ) {
    return n3
  } else if (n4 <= n1 && n4 <= n2 && n4 <= n3 && n4 <= n5 ) {
    return n4
  } else {
    return n5
  }
}

function maior_numero(n1, n2, n3, n4, n5) {
  if ( n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5 ){
    return n1
  } else if ( n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5 ) {
    return n2
  } else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5 ) {
    return n3
  } else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5 ) {
    return n4
  } else {
    return n5
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