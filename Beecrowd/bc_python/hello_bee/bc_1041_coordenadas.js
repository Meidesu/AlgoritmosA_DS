import { import_files } from '../my_strings_utils.js'

function main() {
  const lines = import_files('teste/bc_1041.txt')

  const [x, y] = lines[0].split(' ')

  calcular_posicao_corrd(x, y)

}

function calcular_posicao_corrd(x, y){
  if (x == 0 && y == 0){
    console.log('Origem')
  } else if ( x == 0 ){
    console.log('Eixo Y') 
  } else if ( y == 0 ){
    console.log('Eixo X') 
  } else {
    console.log(calular_quadrante(x, y))
  }


}

function calular_quadrante(x, y){
  if ( x > 0 && y > 0 ){
    return 'Q1'
  } else if ( x < 0 && y < 0 ){
    return 'Q3'
  } else if ( x > 0 && y < 0 ){
    return 'Q4'
  } else if ( x < 0 && y > 0 ){
    return 'Q2'
  }
}


main()