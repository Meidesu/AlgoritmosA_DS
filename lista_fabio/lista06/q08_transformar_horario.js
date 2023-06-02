import { cabecalho, input, rodape, print} from "../../io_utils_.js";

function main() {
  cabecalho('FORMATAR HORARIO')

  const horario = input('Digite um horário no formato(HH:MM:SS): ')


  escrever_horario_num_extenso(horario)

  rodape()
}

function escrever_horario_num_extenso(horario) {
  const [hora, minuto, segundo] = horario.split(':')
  
  print(`${hora} hora(s), ${minuto} minuto(s) e ${segundo} segundo(s)`)
}


main()
