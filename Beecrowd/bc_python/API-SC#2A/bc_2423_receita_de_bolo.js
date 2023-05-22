import { menor_de_n_numeros } from "../math_utils.js";
import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_2423.txt')

  const [farinha, ovos, leite] = lines[0].split(' ').map(Number)

  const max_bolos = calcular_quantidade_de_bolos(farinha, ovos, leite)

  console.log(max_bolos)
  
}

function calcular_quantidade_de_bolos(farinha, ovos, leite){
  let farinha_suficiente_para = Math.floor( farinha / 2 )

  let ovos_suficiente_para = Math.floor( ovos / 3 )

  let leite_suficiente_para = Math.floor( leite / 5 )

  return menor_de_n_numeros([farinha_suficiente_para,ovos_suficiente_para,leite_suficiente_para])
}

main()