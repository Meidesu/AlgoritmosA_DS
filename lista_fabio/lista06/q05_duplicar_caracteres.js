import { trocar_caracteres } from "../../my_strings_utils.js";
import { cabecalho, input, rodape, print} from "../../io_utils_.js";

function main() {
  cabecalho()

  const data = input('Digite uma data (DD/MM/AAAA): ')

  const data_extenso = data_por_extenso(data)

  // print(frase_duplicada)

  rodape()
}

function data_por_extenso(data) {
  const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]

  let [dia, mes, ano] = data.split('/')

  mes = meses[mes-1]

  print(`${dia} de ${mes} de ${ano}`)
 
}


main()
