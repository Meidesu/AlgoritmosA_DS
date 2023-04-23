import { print, input_num, input_num_positivo, input, cabecalho, rodape} from "../../../io_utils_.js"
import { eh_multiplo } from "../../../math_utils.js"

/* Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos. */

function main() {
  cabecalho('TODOS OS MULTIPLOS DE UM NUMERO EM UMA FAIXA')

  const num = input_num_positivo('Digite o numero: ')
  const limite_inferior = input_num_positivo('Digite o limite inferior: ')
  const limite_superior = input_num_positivo('Digite o limite superior: ')
  
  multiplos_numa_faixa(num, limite_inferior, limite_superior)
  
  rodape()
}

function multiplos_numa_faixa(num, inferior, superior){
  let candidato = inferior
  while ( candidato >= inferior && candidato <= superior ){
    if ( eh_multiplo(num, candidato) ){
      print(`>${candidato}`)
    }
    candidato++
  }
}

main()