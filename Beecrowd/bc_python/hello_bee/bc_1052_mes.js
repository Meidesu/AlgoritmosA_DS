import { import_files } from '../my_strings_utils.js'

function main(){

  const lines = import_files('teste/bc_1052.txt')
  
  const num_mes = Number(lines[0])

  mes_por_extenso(num_mes)
  
  
  
}

function mes_por_extenso(num_mes){
  const lista_meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  console.log(lista_meses[ num_mes - 1 ])
  
}


main()