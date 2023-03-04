import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1011.txt').split('\r\n').map(Number) //<----
  
  let raio = lines[0]

  let volume = (4/3.0) * 3.14159 * (raio**3)

  console.log(`VOLUME = ${volume.toFixed(3)}`)
}


main()