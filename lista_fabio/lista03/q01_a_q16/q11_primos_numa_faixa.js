import { cabecalho, input_num_positivo, print, rodape } from "../../../io_utils_.js"
import { eh_primo } from "../../../math_utils.js"

/* Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos. */

function main() {
  cabecalho('TODOS OS NUMEROS PRIMOS EM UMA FAIXA')
  
  const limite_inferior = input_num_positivo('Digite o limite inferior: ')
  const limite_superior = input_num_positivo('Digite o limite superior: ')

  primos_numa_faixa( limite_inferior, limite_superior)
  
  rodape()
}

function primos_numa_faixa(inferior, superior){
  let contador = inferior
  while ( contador <= superior ){
    if ( eh_primo(contador) ){
      print(`>${contador}`)
    }
    contador++
  }
}

main()