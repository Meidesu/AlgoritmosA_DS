import { 
  print, input_num_positivo,
  cabecalho, rodape
} from "../../../io_utils_.js"

/* Escreva a tabuada dos números de 1 a 10. */

function main() {
  cabecalho('TABUADA DE MULTIPLICAÇÃO')

  const numero = input_num_positivo('Insira um numero: ')

  tabuada(numero)
  
  rodape()
}

function tabuada(num) {
  let contador = 1

  while (contador <= 10){
    print(`> ${contador} x ${num} = ${contador*num}`)
    contador++
  }
}

main()