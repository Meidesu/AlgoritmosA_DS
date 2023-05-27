import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1174.txt')

  let lista = lines.map(Number)


/*   for ( let i in lista ) {
    if ( lista[i] <= 10 ){
      console.log(`A[${i}] = ${lista[i].toFixed(1)}`)
    }
  } */

  for ( let i = 0; i < lista.length; i++ ) {
    if ( lista[i] <= 10 ){
      console.log(`A[${i}] = ${lista[i].toFixed(1)}`)
    }
  }
  

  // console.log(lista)
}

main()