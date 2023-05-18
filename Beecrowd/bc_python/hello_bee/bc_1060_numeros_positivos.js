import { import_files, my_map } from '../my_io_utils.js'

function main() {
  const lines = my_map(import_files('teste/bc_1060.txt'), Number)
  
  const total_positivos = verificar_total_de_positivos(lines)

  console.log(`${total_positivos} valores positivos`);
}

function verificar_total_de_positivos(lines) {
  let contador = 0

  for( let i of lines ){
    if ( i > 0 ){
      contador++
    }
  }

  return contador
}

main()