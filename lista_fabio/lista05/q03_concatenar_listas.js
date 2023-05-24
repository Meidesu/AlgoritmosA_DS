import { cabecalho, print, rodape } from "../../io_utils_.js"
import { my_map, new_array, to_number } from "../../my_array_utils.js"

function main() {
  cabecalho()

  const lista_1 = my_map(new_array(), to_number)
  const lista_2 = my_map(new_array(), to_number)

  const lista_3 = lista_1.concat(lista_2)
  
  print(lista_3)

  rodape()
} 

main()
  
//concat
/* for ( let i of v2 ){
  v1.push(i)
}

console.log(v1) */