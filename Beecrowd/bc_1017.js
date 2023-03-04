import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1017.txt').split('\r\n').map(Number) //<----

  let tempo = lines[0] 
  let vm = lines[1]

  let gas_litro = (tempo * vm)/12

  console.log(gas_litro.toFixed(3))

}


main()