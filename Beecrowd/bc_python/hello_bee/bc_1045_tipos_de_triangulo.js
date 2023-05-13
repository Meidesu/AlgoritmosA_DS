import { ordenar_valores } from '../math_utils.js'
import { import_files, my_map} from '../my_io_utils.js'


function main() {
  const lines = import_files('teste/bc_1045.txt')

  const lista_valores = my_map(lines[0].split(' '), Number)

  const [a, b, c] = ordenar_valores(lista_valores)
  
  if(forma_um_triangulo(a, b, c)){
    tipo_quanto_aos_angulos(a, b, c)
    tipo_quanto_aos_lados(a, b, c)

  } else {
    console.log('NAO FORMA TRIANGULO')

  }

}

function tipo_quanto_aos_angulos(a, b, c){
  if (a**2 == b**2 + c**2){
    console.log('TRIANGULO RETANGULO')
  } else if (a**2 > b**2 + c**2){
    console.log('TRIANGULO OBTUSANGULO')
  } else if (a**2 < b**2 + c**2){
    console.log('TRIANGULO ACUTANGULO')
  }
}

function tipo_quanto_aos_lados(a, b, c){
  if (lados_iguais(a, b, c)){
    console.log('TRIANGULO EQUILATERO')
  } else if ( dois_lados_iguais(a, b, c) ) {
    console.log('TRIANGULO ISOSCELES')
  }
}

function dois_lados_iguais(a, b, c){
  return a == b || a == c || c == b
}

function forma_um_triangulo(a, b, c){
  return (a < b + c)
}

function lados_iguais(a, b, c){
  return a == b && b == c
}

main()

