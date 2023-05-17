import { import_files } from '../my_io_utils.js'

function main(){

  const lines = import_files('teste/bc_1050.txt')
  
  const ddd = Number(lines[0])

  definir_cidade(ddd)
  
}



main()