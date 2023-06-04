import {
  cabecalho,
  input_str_tam_minimo,
  rodape,
  print
} from '../../io_utils_.js'

import { inverter_frase } from "../../my_strings_utils.js"

function main() {
  cabecalho('PALAVRAS PALINDROMAS')

  const palavra = input_str_tam_minimo('Insira uma palavra: ', 1)

  const palavra_invertida = inverter_frase(palavra)

  if( palavra == palavra_invertida ){
    print(`${palavra} é uma palavra palíndroma.`)
  } else {
    print(`${palavra} não é uma palavra palíndroma.`)
  }

  rodape()
}

main()
