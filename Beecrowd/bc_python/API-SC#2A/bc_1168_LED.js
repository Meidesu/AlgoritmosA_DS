import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1168.txt')

  const num_casos = lines[0]
  

  for( let linha = 1; linha <= num_casos; linha++){
    const leds = leds_necessarios(lines[linha])
    console.log(`${leds} leds`)
  }
  
}

function leds_necessarios(linha) {
  const leds_para_alg = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]
  let total_leds = 0
  
  for (let alg of linha ){
    // console.log(leds_para_alg[alg]);
    total_leds += leds_para_alg[alg]
  }

  return total_leds
}


main()