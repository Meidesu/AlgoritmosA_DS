import { loadFile } from '../function.js'

function main() {
  const lines = loadFile('../teste/bc_1003.txt').split('\r\n').map(Number)

  let a = lines[0]
  let b = lines[1]
  let soma = a + b 
  console.log(`SOMA = ${soma}`)

}

main()