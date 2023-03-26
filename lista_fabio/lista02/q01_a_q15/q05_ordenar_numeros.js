import { question } from "readline-sync";

/*Leia 3 (três) números e escreva-os em ordem crescente. */

function main() {
  const num1 = input('Primeiro numero: ')
  const num2 = input('Segundo numero: ')
  const num3 = input('Terceiro numero: ')

  const maior = numero_maior(num1, num2, num3)
  const meio = numero_meio(num1, num2, num3)
  const menor = numero_menor(num1, num2, num3)
  
  print(`Ordem crescente: ${menor}, ${meio}, ${maior}`)
}

function numero_maior(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1
  } else if ( num2 >= num1 && num2 >= num3 ){
    return num2    
  } else if ( num3 >= num1 && num3 >= num2 ){
    return num3    
  }
}

function numero_meio(num1, num2, num3) {
  if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
    return num1
  } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
    return num2
  } else {
    return num3
  }
}

function numero_menor(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    return num1
  } else if ( num2 <= num1 && num2 <= num3 ){
    return num2    
  } else if ( num3 <= num1 && num3 <= num2 ){
    return num3    
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