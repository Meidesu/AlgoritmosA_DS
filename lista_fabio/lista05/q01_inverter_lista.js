import { cabecalho, input, input_num_positivo, print, rodape } from '../../io_utils_.js'
import { inverter_lista, my_map,
         new_array_padrao, to_number } from '../../my_array_utils.js'

function main() {
  cabecalho('INVERTER LISTA')

  const tamanho = input_num_positivo('Informe o tamanho da lista: ')
  let lista = new_array_padrao(tamanho)

  for ( let i in lista ){
    lista[i] = input(`Valor do indice ${i}: `)
  }  

  const lista_invertida = inverter_lista(my_map(lista, to_number))

  print(lista_invertida)

  rodape()
} 

main()