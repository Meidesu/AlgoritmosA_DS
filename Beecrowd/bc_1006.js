import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1006.txt').split('\r\n').map(Number) //<----
  
  let a = lines[0]
  let b = lines[1]
  let c = lines[2]

  let media = ((a*2)+(b*3)+(c*5))/10

  console.log(`MEDIA = ${media.toFixed(1)}`)

}


main()