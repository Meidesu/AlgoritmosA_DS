import { cabecalho, input, rodape, print} from "../../io_utils_.js";

function main() {
  cabecalho()

  const frase = input('Digite uma frase: ')

  const frase_duplicada = duplicar_cada_char(frase)

  print(frase_duplicada)

  rodape()
}

function duplicar_cada_char(frase) {
  let frase_duplicada = ''

  for ( let char of frase ){
    frase_duplicada += char + char
  }

  return frase_duplicada
}


main()
