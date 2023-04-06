import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('teste/bc_1010.txt').split('\r\n') //<----
  
  let peca1 = lines[0].split(' ').map(Number)
  let peca2 = lines[1].split(' ').map(Number)
  
  let valor_p1 = peca1[1] * peca1[2]
  let valor_p2 = peca2[1] * peca2[2]

  let total_a_pagar = valor_p1 + valor_p2
  
  console.log(`VALOR A PAGAR = R$ ${total_a_pagar.toFixed(2)}`)
}


main()