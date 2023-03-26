import { question } from "readline-sync";

/* Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida. */

function main() {
  print('-----------------------------------------------------------------\n')
  print('**************** VALIDAR DATA ****************\n')
  print('-----------> Informe uma data <-----------------------')
  const dia = input('Dia: ')
  const mes = input('Mes: ')
  const ano = input('Ano: ')

  const data = validar_data(dia, mes, ano)

  print(data)
  print('\n-----------------------------------------------------------------')
}

function validar_data(dia, mes, ano) {
  if ( (dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 0 && ano <= 9999) ) {
    return `Data válida`
  } else {
    return `Data inválida`
  }
}

function input(cont) {
  const input = Number(question(cont))

  return input
}
function print(cont) {
  const print = console.log(cont)

  return print
}

main()