import { print, input_num_positivo, cabecalho, rodape } from "../../../io_utils_.js"
import { eh_multiplo } from "../../../math_utils.js"

/*Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos. */

function main() {
  cabecalho('TODOS OS NUMEROS PARES EM UMA FAIXA')

  const limite_inferior = input_num_positivo('Digite o limite inferior: ')
  const limite_superior = input_num_positivo('Digite o limite superior: ')
  
  pares_numa_faixa( limite_inferior, limite_superior)
  
  rodape()
}

function pares_numa_faixa(inferior, superior){
  let contador = inferior
  while ( contador >= inferior && contador <= superior ){
    if ( eh_multiplo(2, contador) ){
      print(`>${contador}`)
    }
    contador++
  }
}

main()