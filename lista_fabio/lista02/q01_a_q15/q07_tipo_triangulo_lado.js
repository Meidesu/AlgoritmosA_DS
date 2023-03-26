import { question } from "readline-sync";

/*Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero). */

function main() {
  print('-----------------------------------------------------------------\n')
  const lado_1 = input('Primeiro lado: ')
  const lado_2 = input('Segundo lado: ')
  const lado_3 = input('Terceiro lado: ')

  const validar = validar_triangulo(lado_1, lado_2, lado_3)
  const tipo = classificar_triangulo(lado_1, lado_2, lado_3, validar)

  print(`Este triangulo é ${tipo}`)

  print('\n-----------------------------------------------------------------')
}

function validar_triangulo(l1, l2, l3) {
  if ( l1 + l2 >= l3 && l1 + l3 >= l2 && l2 + l3 >= l1 ) {
    return 'valido'
  } else {
    return 'invalido'
  }

}

function classificar_triangulo(l1, l2, l3, validar) {
  if (validar == 'valido') {
    if ( l1 == l2 && l1 == l3 && l2 == l3 ){
      return `Equilatero`
    } else if ( l1 !== l2 && l1 !== l3 && l2 !== l3 ) {
      return `escaleno`
    } else {
      return `isosceles`
    }
  } else {
    return 'invalido'
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