import { import_files, my_map } from '../my_io_utils.js'
import { eh_multiplo } from '../math_utils.js'


function main(){
  const lines = import_files('teste/bc_1044.txt')

  const [num1, num2] = my_map(lines[0].split(' '), Number)

  if (eh_multiplo(num1, num2)){
    console.log('Sao Multiplos')
  } else {
    console.log('Nao sao Multiplos')
  }

}



main()