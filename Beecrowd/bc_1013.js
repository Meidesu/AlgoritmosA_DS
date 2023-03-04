import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1013.txt').split('\r\n')//<----
  
  let valores = lines[0].split(' ')
  let v_1 = Number(valores[0])
  let v_2 = Number(valores[1])
  let v_3 = Number(valores[2])

 
  let MaiorABC = Math.max(v_1, v_2, v_3);

  console.log(`${MaiorABC} eh o maior`)

}

main()