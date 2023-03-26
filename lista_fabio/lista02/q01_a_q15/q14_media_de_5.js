import { question } from "readline-sync";

/* Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.*/

function main() {
  print('-----------------------------------------------------------------\n')
  print('-----------> MEDIA DE 5 NUMEROS <-----------')

  const num_1 = input('Primeiro numero: ')
  const num_2 = input('Segundo numero: ')
  const num_3 = input('Terceiro numero: ')
  const num_4 = input('Quarto numero: ')
  const num_5 = input('Quinto numero: ')

  const media = calcular_media(num_1, num_2, num_3, num_4, num_5)
  const maiores = comparar_numeros(num_1, num_2, num_3, num_4, num_5, media)

  if (maiores !== '') {
    print(`${maiores} são maiores que a media`)
  } else {
    print('Todos os valores são menores ou iguais a media')
  }

  print('\n-----------------------------------------------------------------')
}

function calcular_media(n1, n2, n3, n4, n5) {
  return (n1 + n2 + n3 + n4 + n5) / 5
}

function comparar_numeros(n1, n2, n3, n4, n5, media) {
  let maiores = ''

  if (n1 > media){
    maiores = `${n1}`
  } if (n2 > media){
    maiores += `, ${n2}`
  } if (n3 > media){
    maiores += `, ${n3}`
  } if (n4 > media){
    maiores += `, ${n4}`
  } if (n5 > media){
    maiores += `, ${n5}`
  }

  return maiores
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