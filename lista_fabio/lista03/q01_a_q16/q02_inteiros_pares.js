import { question } from "readline-sync";

/* Leia N e escreva todos os números inteiros pares de 1 a N.*/

function main() {
  cabecalho('INTEIROS PARES ENTRE 1 E N')
  
  const final = input('Informe o "n": ')
  
  numeros_pares(final)

  rodape()
}

function numeros_pares(final){
  let i = 1

  while (i <= final){
    if ( i % 2 == 0 ){
      print(`> ${i}`)
    }

    i++
  }

}



// Funções de Apoio
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