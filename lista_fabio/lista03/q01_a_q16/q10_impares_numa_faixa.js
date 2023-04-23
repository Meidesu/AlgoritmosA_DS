import { cabecalho, input_num_positivo, print, rodape } from "../../../io_utils_.js"
import { eh_multiplo } from "../../../math_utils.js"

/* Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos. */

function main() {
  cabecalho('TODOS OS NUMEROS IMPARES EM UMA FAIXA')

  const limite_inferior = input_num_positivo('Digite o limite inferior: ')
  const limite_superior = input_num_positivo('Digite o limite superior: ')
  
  impares_numa_faixa( limite_inferior, limite_superior)
  
  rodape()
}

function impares_numa_faixa(inferior, superior){
  let contador = inferior
  while ( contador >= inferior && contador <= superior ){
    if ( !(eh_multiplo(2, contador)) ){
      print(`>${contador}`)
    }
    contador++
  }
}

main()