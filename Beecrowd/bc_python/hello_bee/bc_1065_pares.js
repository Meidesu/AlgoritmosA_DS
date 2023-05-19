import { import_files, my_map } from '../my_strings_utils.js'
import { eh_par } from '../math_utils.js'

function main() {
  const lines = import_files('teste/bc_1065.txt')
  let valores = my_map(lines, Number)
  let total_pares

  if ( lines.length == 1 ){
    valores = my_map(lines[0].split(' '), Number) 
    total_pares = verificar_total_de_pares(valores)
  }else{
    total_pares = verificar_total_de_pares(valores)
  }

  console.log(`${total_pares} valores pares`)
}

function verificar_total_de_pares(lines) {
  let contador = 0
  
  for( let i of lines ){
    if ( eh_par(i) ){
      contador++
    }
  }
  
  return contador
}

main()