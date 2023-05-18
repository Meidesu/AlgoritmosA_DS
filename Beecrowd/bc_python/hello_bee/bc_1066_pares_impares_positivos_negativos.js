import { import_files, my_map } from '../my_io_utils.js'
import { eh_par } from '../math_utils.js'

function main() {
  const lines = my_map(import_files('teste/bc_1066.txt'), Number)

  const [pares, impares] = contar_pares_e_impares(lines)
  const [positivos, negativos] = contar_positivos_e_negativos(lines)


  console.log(`${total_pares} valores pares`)
}

function contar_pares_e_impares(lines) {
  let pares = 0
  let impares = 0
  const len = lines.lenght
  
  for( let i = 0; i < len; i++ ){
    if ( eh_par(lines[i]) ){
      pares++
    } else {
      impares++
    }
  }
  
  return [pares, impares]
}

function contar_positivos_e_negativos(lines) {
  let negativo = 0
  let positivo = 0
  const len = lines.lenght
  
  for( let i = 0; i < len; i++ ){
    if ( lines[i] < 0 ){
      negativo++
    } else if ( lines[i] > 0 ) {
      positivo++
    }
  }
  
  return [positivo, negativo]
}

main()