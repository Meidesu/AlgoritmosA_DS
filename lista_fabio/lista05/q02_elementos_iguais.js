import { len,  my_map,  new_array, to_number } from "../../my_array_utils.js"

function main() {
  const lista = my_map(new_array(), to_number)

  // console.log(lista)

  let itens_iguais = false

  for ( let i_cand = 0; i_cand < len(lista); i_cand++) {
    const candidato = lista[ i_cand]
    // console.log(candidato)

    for( let i_atual = 0; i_atual < len(lista); i_atual ++ ){
      if( candidato == lista[i_atual] && i_atual !== i_cand  ){
        itens_iguais = true
      }
    }
  }
  
  if ( itens_iguais ){
    console.log('Ao menos um item da lista se repete')
  } else {
    console.log('Nenhum item se repete')
  }


}

main()