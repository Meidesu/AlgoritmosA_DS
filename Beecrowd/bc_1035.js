import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1035.txt').split('\r\n')
  
  let valores = lines[0].split(' ').map(Number)

  let a = valores[0]
  let b = valores[1]
  let c = valores[2]
  let d = valores[3]
  
  if (b > c &&
      d > a && 
      c + d > a + b &&
      c >= 0 &&
      d >= 0 &&
      a % 2 == 0
     ){  
        console.log('Valores aceitos')
  }else{
        console.log('Valores nao aceitos')
  }

}

main()