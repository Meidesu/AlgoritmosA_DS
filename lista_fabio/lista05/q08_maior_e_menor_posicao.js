import { new_array_aleatorio, my_sort, new_array, to_number, my_map } from "../../my_array_utils.js"
import { eh_par } from "../../math_utils.js"
import { print, cabecalho, rodape, input_num_positivo } from "../../io_utils_.js"

function main() {
  console.clear()
  cabecalho('fazer algo')

  menu()

  const opcao = input_num_positivo('>> ')

  let lista
  let tamanho
  
  switch (opcao) {
    case 1:  
      tamanho = input_num_positivo('Informe o tamanho: ')
      lista = new_array_aleatorio(tamanho)
      break
    case 2:
      lista = my_map(new_array(), Number)
      break
    default:
      print('Escolha uma opção válida!')
  }
  
  // const tamanho = input_num_positivo('Informe o tamanho da lista: ')
  
 // lista = new_array_aleatorio(tamanho)
  print(`\nlista: ${lista}\n`)  
  print(lista)  

  const lista_decrescente = my_sort(lista)
  print(`Maior numero da lista: ${lista_decrescente[0]}\n`)

  const lista_crescente = my_sort(lista, true)
  print(`Menor numero da lista: ${lista_crescente[0]}`)

  rodape()
}

function menu(){

  print('--------------------------------')
  print('- Escolha uma opção: \n')
  print(' 1 - Gerar uma lista aleatória; ')
  print(' 2 - Inserir lista manual; ')
  
}


main()