import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1001.txt').split('\r\n').map(Number)
  
  //  console.log(lines[0])

  let a = lines[0]
  let b = lines[1]
  let x = a + b
  console.log(`X = ${x}`)

}


main()