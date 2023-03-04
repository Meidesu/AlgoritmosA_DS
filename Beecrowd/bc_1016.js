import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1016.txt').split('\r\n').map(Number) //<----

  let dist = lines[0]

  let tempo = dist * 2
  
  console.log(`${tempo} minutos`)

}


main()