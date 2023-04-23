import { cabecalho, input_num_positivo, print, rodape } from "../../../io_utils_.js"

/* */

function main() {
  cabecalho('MEDIA DE N NUMEROS')

  const quantidade = input_num_positivo('Insira a quantidade de numeros: ')

  const media = media_de_n_numeros(quantidade)

  print(`\nMedia dos ${quantidade} numeros: ${media}`)

  rodape()
}

function media_de_n_numeros(quantidade){
  let contador = 1
  let somatorio = 0
  while ( contador <= quantidade ){
    somatorio += input_num_positivo(`Insira o ${contador}º numero: `)
    contador++
  } 
  return somatorio / quantidade
}

main()