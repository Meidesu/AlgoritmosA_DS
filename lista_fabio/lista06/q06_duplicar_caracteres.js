import { eh_numero, numero_por_extenso } from "../../my_strings_utils.js";
import { cabecalho, input, rodape, print} from "../../io_utils_.js";

function main() {
  cabecalho()

  const frase = input('Digite uma frase: ')

  const frase_numeros_extenso = escrever_frase_num_extenso(frase)

  print(frase_numeros_extenso)

  rodape()
}

function escrever_frase_num_extenso(frase) {
  const palavras = frase.split(' ')
  let nova_frase = []

  for(let char of palavras){
    if ( eh_numero(char) ) {
      // nova_frase += numero_por_extenso(char)
      nova_frase.push(numero_por_extenso(char))
    }else{
      nova_frase.push(char)
      // nova_frase += ' ' + char
    }
  }

  return nova_frase.join(' ')
}


main()
