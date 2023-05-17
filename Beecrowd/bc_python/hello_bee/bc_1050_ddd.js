import { import_files } from '../my_io_utils.js'

function main(){

  const lines = import_files('teste/bc_1050.txt')
  
  const ddd = Number(lines[0])

  definir_cidade(ddd)
  
}

function definir_cidade(ddd){
  if ( ddd == 61 ){
    console.log('Brasilia')
  } else if ( ddd == 71 ){
    console.log('Salvador')
  } else if ( ddd == 11 ){
    console.log('Sao Paulo')
  } else if ( ddd == 21 ){
    console.log('Rio de Janeiro')
  } else if ( ddd == 32 ){
    console.log('Juiz de Fora')
  } else if ( ddd == 19 ){
    console.log('Campinas')
  } else if ( ddd == 27 ){
    console.log('Vitoria')
  } else if ( ddd == 31 ){
    console.log('Belo Horizonte')
  } else {
    console.log('DDD nao cadastrado')
  }

}

main()