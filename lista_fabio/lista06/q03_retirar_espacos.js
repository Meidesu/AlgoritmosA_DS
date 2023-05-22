import { trocar_caracteres } from "../../my_strings_utils.js";
import { cabecalho, input, rodape, print} from "../../io_utils_.js";

function main() {
  cabecalho()

  const frase = input('Digite uma frase: ')

  const frase_sem_espaco = trocar_caracteres(frase, ' ', '')

  print(frase_sem_espaco)

  rodape()
}


main()
