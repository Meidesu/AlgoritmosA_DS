import { question } from "readline-sync";

/* Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R. */

function main() {
  cabecalho('PROGRESSÃO GEOMÉTRICA')

  const inicio = input('Primeiro termo: ')
  const final = input('Ultimo termo: ')
  const razao = input('Razao: ')

  progressao_geometrica(inicio, final, razao)
  
  rodape()
}

function progressao_geometrica(inicio, final, razao){
  let i = inicio

  while (i <= final) {
    print(`> ${i}`)
    i *= razao
  }

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