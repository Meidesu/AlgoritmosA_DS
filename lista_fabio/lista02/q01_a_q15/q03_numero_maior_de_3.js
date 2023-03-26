import { question } from "readline-sync";

/*Leia 3 (três) números, verifique e escreva o maior entre os números lidos. */

function main() {
  const num1 = input('Primeiro numero: ')
  const num2 = input('Segundo numero: ')
  const num3 = input('Terceiro numero: ')

  const maior = numero_maior(num1, num2, num3)

  print(maior)
}

function numero_maior(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} é o maior numero`
  } else if ( num2 > num1 && num2 > num3 ){
    return `${num2} é o maior numero`    
  } else if ( num3 > num1 && num3 > num2 ){
    return `${num3} é o maior numero`    
  }
  return `Os numeros são iguais`
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