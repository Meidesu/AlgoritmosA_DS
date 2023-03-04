import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1015.txt').split('\r\n') //<----
  
  let p1 = lines[0].split(' ').map(Number)
  let x1 = p1[0]
  let y1 = p1[1]

  let p2 = lines[1].split(' ').map(Number)
  let x2 = p2[0]
  let y2 = p2[1]

  let dist = Math.sqrt((x2-x1)**2+(y2-y1)**2)

  console.log(dist.toFixed(4))
}


main()