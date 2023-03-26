import { question } from "readline-sync";

/*Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.*/

function main() {
  const num1 = input('Primeiro Numero: ')
  const num2 = input('Segundo Numero: ')

  const maior = numero_maior(num1, num2)

  print(maior)
}

function numero_maior(num1, num2) {
  if (num1 > num2) {
    return `${num1} é maior que ${num2}`
  }else if (num2 > num1) {
    return `${num2} é maior que ${num1}`
  }else {
    return `Os numeros são iguais`
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