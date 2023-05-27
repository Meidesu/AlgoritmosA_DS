import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1173.txt')

  let num_base = Number(lines[0])

  let lista = new_array_padrao(10)
  
  for( let i in lista ){
    lista[i] = num_base 
    num_base *= 2
  
  }

  for ( let i in lista ) {
    console.log(`N[${i}] = ${lista[i]}`)
  }

  // console.log(lista)
}

function new_array_padrao(tamanho, padrao=0) {
  let new_array = new Array(tamanho)

  for ( let i = 0; i < tamanho; i++ ){
    new_array[i] = padrao

  }
  
  return new_array
}

main()