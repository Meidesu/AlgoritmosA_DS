import { cabecalho, print, rodape, input_num } from "../../../io_utils_.js"

/* Leia N e escreva todos os números inteiros pares de 1 a N. */

function main() {
  cabecalho('PARES ATÉ N')

  const final = input_num('Isira o valor de n: ')

  pares_ate_n(final)

  rodape()
}

function pares_ate_n(final){
  for ( let i = 1; i <= final; i ++ ){
    if ( i % 2 == 0 ){
      print(i)
    }
  }
}

main()