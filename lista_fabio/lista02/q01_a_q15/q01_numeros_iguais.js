import { question } from "readline-sync";

/*Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números. */

function main() {
  const num1 = input('Primeiro Numero: ')
  const num2 = input('Segundo Numero: ')
  const num3 = input('Terceiro Numero: ')

  const num_iguais = comparar_numeros(num1, num2, num3)

  print(`Quantidade de numeros repetidos: ${num_iguais}`)
}

function comparar_numeros(num1, num2, num3) {
  let iguais = 0 
  if (num1 == num2) {
    iguais++
  }
  if (num1 == num3) {
    iguais++
  }
  if (num2 == num3) {
    iguais++
  }
  
  return iguais
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