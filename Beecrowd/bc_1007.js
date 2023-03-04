import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1007.txt').split('\r\n').map(Number) //<----
  
  let A = lines[0]
  let B = lines[1]
  let C = lines[2]
  let D = lines[3]

  let diferenca = (A * B - C * D)

  console.log(`DIFERENCA = ${diferenca}`)

}


main()