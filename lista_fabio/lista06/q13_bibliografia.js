import {
  cabecalho,
  input,
  rodape,
  print
} from '../../io_utils_.js'

import { inverter_frase, len } from "../../my_strings_utils.js"

function main() {
  cabecalho('FORMATAR NOME PARA BIBLIOGRAFIA')

  const nome_completo = input('Insira um nome completo: ').split(' ')

  if ( nome_completo.length )



  // const qnt_caracteres = len(frase)

  print(nome_completo)

  rodape()
}

main()
