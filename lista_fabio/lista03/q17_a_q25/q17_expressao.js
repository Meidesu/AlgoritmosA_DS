import { cabecalho, input_num_positivo, print, rodape } from "../../../io_utils_.js"

/*  */

function main() {
  cabecalho('1/1 + 1/2 + 1/3 + ... + 1/n')

  const ultimo_termo = input_num_positivo('\nDada a expressão acima, infome o valor de N: ')

  const expressao = calculo_expressao(ultimo_termo)

  print(`\nResultado da expressão: ${expressao}`)

  rodape()
}

function calculo_expressao(ultimo_termo) {

  let contador = 1
  let somatorio = 0

  while (contador <= ultimo_termo){
    somatorio += 1 / contador
    contador ++ 
  }
  return somatorio

}

main()