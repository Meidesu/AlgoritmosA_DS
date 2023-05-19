import { import_files, my_map } from '../my_strings_utils.js'

function main() {
  const lines = my_map(import_files('teste/bc_1061.txt'), Number)
  
  const [total_positivos, media] = verificar_total_de_positivos(lines)

  console.log(`${total_positivos} valores positivos`)
  console.log(`${media}`)
}

function verificar_total_de_positivos(lines) {
  let contador = 0
  let somatorio = 0
  
  for( let i of lines ){
    if ( i > 0 ){
      contador++
      somatorio += i
    }
  }
  const media = somatorio/contador
  
  return [contador, media]
}

main()