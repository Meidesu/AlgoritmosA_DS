import { cabecalho, input_binario, print, rodape } from "../../io_utils_.js"
import { my_map, len, to_number } from "../../my_array_utils.js"
import { my_split } from "../../my_strings_utils.js"

function main() {
  cabecalho()

  const numero_binario = my_map(my_split(input_binario(), ''), to_number)

  print(numero_binario)

  const decimal = converter_binario_decimal(numero_binario)
  // const hexadecimal = converter_binario_hexadecimal(numero_binario)
  
  print(decimal)

  rodape()
}

function converter_binario_decimal(numero_binario){
  let decimal = 0
  const tamanho = len(numero_binario) 
  let expo = 0

  for ( let i = tamanho-1; i >= 0; i-- ){
    decimal +=( 2**expo) * numero_binario[i]
    expo++
    
  }

  return decimal
}

  function converter_binario_decimal(numero_binario){
    let hexa = 0
    const tamanho = len(numero_binario) 
    let expo = 0

    for ( let i = tamanho-1; i >= 0; i-- ){
      hexa +=( 1**expo) * numero_binario[i]
      expo++

    }

    return hexa
  }

main()