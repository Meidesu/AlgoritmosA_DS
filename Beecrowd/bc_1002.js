import {loadFile} from '../function.js'

function main(){
  const lines = loadFile('teste/bc_1002.txt').split('\r\n').map(Number)
  let raio = lines[0].toFixed(2)

  let area = (raio**2)*3.14159

  console.log(`A=${area.toFixed(4)}`)
  console.log(raio)

}
main()