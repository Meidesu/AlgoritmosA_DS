import { question } from "readline-sync";

/* Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).*/

function main() {
  print('-----------------------------------------------------------------\n')
  const angulo_1 = input('Informe o primeiro angulo: ')
  const angulo_2 = input('Informe o segundo angulo: ')
  const angulo_3 = input('Informe o terceiro angulo: ')

  const status = validar_triangulo(angulo_1, angulo_2, angulo_3)
  const triangulo = classificar_triangulo(angulo_1, angulo_2, angulo_3, status)
  
  print(`${triangulo}`)
  
  print('\n-----------------------------------------------------------------')
}

function classificar_triangulo(a1, a2, a3, stt) {
  const soma = a1 + a2 + a3
  
  if (soma == 180 && stt == true) {
    if (a1 == 90 || a2 == 90 || a3 == 90) {
      return `Triangulo Retangulo`
    } else if(a1 < 90 && a2 < 90 && a3 < 90) {
      return `Triangulo Acutangulo`
    } else {
      return `Triangulo Obtusangulo` 
    }
  }else {
    return `Não forma um triangulo`
  }
}

function validar_triangulo(a1, a2, a3) {
  return a1 > 0 && a2 > 0 && a3 > 0
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