import {loadFile} from '../function.js'

function main(){
  
  const lines = loadFile('../teste/bc_1005.txt').split('\r\n').map(Number)

  let a = (lines[0])
  let b = (lines[1])
  
  let media = ((a*3.5)+(b*7.5))/11
  
  console.log(`MEDIA = ${media.toFixed(5)}`)
}

main()
