import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1929.txt')

  const varetas = lines[0].split(' ').map(Number)

  if( formam_ao_menos_um_triangulo(varetas) ){
    console.log('S')

  } else {
    console.log('N')

  }
  
}

function formam_ao_menos_um_triangulo(varetas){
  const [a, b, c, d] = varetas
  
  if ( formam_um_triangulo(a, b, c) ){
    return true
  } else if ( formam_um_triangulo(a, b, d) ){
    return true
  } else if ( formam_um_triangulo(a, c, d) ){
    return true
  } else if ( formam_um_triangulo(b, c, d) ){
    return true
  } else {
    return false
  }

}

function formam_um_triangulo( l1, l2, l3 ){
  return l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2
}

main()