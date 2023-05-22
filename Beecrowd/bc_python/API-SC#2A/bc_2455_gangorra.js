import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_2455.txt')

  const [p1, c1, p2, c2] = lines[0].split(' ').map(Number)

  verificar_situacao(p1, c1, p2, c2)

}

function verificar_situacao(p1, c1, p2, c2){
  if( p1 * c1 == p2 * c2 ){
    console.log(0)
  } else if (p1 * c1 > p2 * c2){
    console.log(-1)
  } else {
    console.log(1)
  }

}

main()