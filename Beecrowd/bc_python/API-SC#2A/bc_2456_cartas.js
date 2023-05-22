import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_2456.txt')

  const lista_cartas = lines[0].split(' ').map(Number)

  if ( eh_crescente(lista_cartas) ){
    console.log('C')
    
  } else if ( eh_decrescente(lista_cartas) ){
    console.log('D')

  } else {
    console.log('N')

  }
  
}

function eh_crescente(lista){
  for ( let i = 0; i < lista.length - 1; i++ ){
    if ( lista[i] > lista[i+1] ){
      return false
    }
  }

  return true
}

function eh_decrescente(lista){
  for ( let i = 0; i < lista.length - 1; i++ ){
    if ( lista[i] < lista[i+1] ){
      return false
    }
  }

  return true
}


main()