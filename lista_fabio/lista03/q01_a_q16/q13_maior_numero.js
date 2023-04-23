import { cabecalho, input_num_positivo, print, rodape } from "../../../io_utils_.js"
import { maior_de_n_numeros } from "../../../math_utils.js"
/* Leia N e uma lista de N números e escreva o maior número da lista. */

function main() {
  cabecalho('MAIOR ENTRE N NUMEROS')

  const qnt = input_num_positivo('Insira a quantidade de numeros: ')
  
  const maior = maior_de_n_numeros(qnt)  
  
  print(`O maior é: ${maior}`)
  
  rodape()
}

main()