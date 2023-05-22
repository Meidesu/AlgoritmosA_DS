import { mostrar_char_por_linha } from "../../my_strings_utils.js";
import { cabecalho, input, rodape} from "../../io_utils_.js";

function main() {
  cabecalho()

  const frase = input('Digite uma frase: ')

  mostrar_char_por_linha(frase)


  rodape()
}


main()
