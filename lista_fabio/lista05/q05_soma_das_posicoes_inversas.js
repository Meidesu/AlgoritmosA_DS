import { new_array_aleatorio, my_sort, new_array, to_number, my_map } from "../../my_array_utils.js"
import { eh_par } from "../../math_utils.js"
import { print, cabecalho, rodape, input_num_positivo } from "../../io_utils_.js"

function main() {
  cabecalho()

  menu()

  const opcao = input_num_positivo('>> ')

  let lista
  const tamanho = 20
  
  switch (opcao) {
    case 1:  

      lista = new_array_aleatorio(tamanho)
      break
    case 2:
      lista = my_map(new_array(), to_number)
      break
    default:
      print('Escolha uma opção válida!')
  }

  // let index = 0

  print(lista)
  let somatorio = 0
  
  for ( let i = 0; i < tamanho/2; i++ ){
    somatorio = (lista[i+1] - lista[tamanho-i])**2 
  }
  
  print(`Somatorio: ${somatorio}`)

  rodape()
}

function menu(){

  print('--------------------------------')
  print('- Escolha uma opção: \n')
  print(' 1 - Gerar uma lista aleatória; ')
  print(' 2 - Inserir lista manual; ')
  
}


main()