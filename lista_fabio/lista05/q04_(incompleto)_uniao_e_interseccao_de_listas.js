import { print } from "../../io_utils_.js"
import { my_map, new_array, to_number } from "../../my_array_utils.js"

function main() {
  const lista_1 = my_map(new_array('Tamanho da primeira lista: '), to_number)
  const lista_2 = my_map(new_array('Tamanho da segunda lista: '), to_number)

  const intersecao = instersecao_de_listas(lista_1, lista_2)
  const soma_listas = lista_1.concat(lista_2)
  const uniao = uniao_de_listas(soma_listas, intersecao)

  print(intersecao)
} 

// function uniao_de_listas(soma_listas, intersecao){
  

// }

function instersecao_de_listas(lista_1, lista_2){
  let intersecao = []
  let [maior, menor] = maior_e_menor_lista(lista_1, lista_2)

  for ( let item of maior ){

    if ( esta_na_lista(item ,menor) ){
      intersecao.push(item)
    }
  }

  return intersecao
}
function esta_na_lista(candidado ,lista){
  for (let item of lista) {
    if ( candidado == item ){
      return true
    }
  }

  return false
}

function maior_e_menor_lista(lista_1, lista_2){
  if ( lista_1.length > lista_2.length ){
    return [lista_1, lista_2]
  } else {
    return [lista_2, lista_1]
  }
}


main()