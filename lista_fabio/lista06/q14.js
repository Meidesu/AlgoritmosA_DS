import {
  cabecalho,
  input_str_tam_minimo,
  rodape,
  print
} from '../../io_utils_.js'

import { inverter_frase, len } from "../../my_strings_utils.js"

function main() {
  cabecalho('CONTAGEM DE CARACTERES')

  const frase = input_str_tam_minimo('Insira uma frase: ', 1)

  const qnt_caracteres = len(frase)

  print(`${qnt_caracteres} caracteres.`)

  rodape()
}

main()
