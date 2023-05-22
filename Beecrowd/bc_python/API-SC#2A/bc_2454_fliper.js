import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_2454.txt')

  const [p, r] = lines[0].split(' ').map(Number)

  if ( p == 0 ){
    console.log('C')

  } else if( r == 0 ){
    console.log('B')
    
  } else {
    console.log('A')
    
  }

}

main()