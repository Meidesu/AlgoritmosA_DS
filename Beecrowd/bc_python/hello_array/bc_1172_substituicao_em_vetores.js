import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1172.txt')

  let lista = lines.map(Number)
  
  for( let i in lista ){
  
    if ( lista[i] <= 0){
      console.log(`X[${i}] = ${1}`)
      
    } else {
      console.log(`X[${i}] = ${lista[i]}`)
      
    }
  }
}

main()