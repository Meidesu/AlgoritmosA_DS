import { import_files } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_2229.txt')

  const casos = lines.map(Number)
  let caso_atual = Number(casos[0])
  let contador = 0

  while ( caso_atual != -1 ){
    console.log(`Teste ${contador+1}`)

    if ( caso_atual == 0){
      console.log('4')
    }else{


      const pontas = 4 * caso_atual
      const centro = 1
      const laterais = 4 ** caso_atual

      // console.log(caso_atual)
      // console.log(pontas)
      // console.log(centro)
      // console.log(laterais)

      const total_pedacos = pontas + centro + laterais 

      console.log(`${total_pedacos}`)
    }

    console.log()
    contador++
    caso_atual = Number(lines[contador])
  }


}


main()