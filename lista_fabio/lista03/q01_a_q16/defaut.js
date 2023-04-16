import { question } from "readline-sync";

/* */

function main() {
  cabecalho('')

  print()
  
  rodape()
}




//Funções de Apoio
function input(cont) {
  const input = Number(question(cont))

  return input
}
function print(cont) {
  const print = console.log(cont)

  return print
}

function cabecalho(txt){
  print('-----------------------------------------------------------------\n')
  print(`############### ${txt} ###############`)
}

function rodape() {
  print('\n-----------------------------------------------------------------')
}

main()