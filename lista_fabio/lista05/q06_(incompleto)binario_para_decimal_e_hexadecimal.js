import { cabecalho, input_binario, print, rodape } from "../../io_utils_.js"
import { my_map, len, to_number } from "../../my_array_utils.js"
import { inverter_frase, my_split } from "../../my_strings_utils.js"

function main() {
  cabecalho()

  const numero_binario = my_map(my_split(input_binario(), ''), to_number)

  print(numero_binario)

  const decimal = converter_binario_decimal(numero_binario)
  const hexadecimal = converter_decimal_hexadecimal(decimal)
  
  print(`Em decimal: ${decimal}`)
  // print(`Em hexadecimal: ${hexadecimal}`)

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

function converter_decimal_hexadecimal(decimal){
  let hexa = ''

  let quociente = decimal
  let resto = quociente % 16
  quociente = Math.floor(quociente / 16)

  if ( resto < 16 ){
    if ( resto < 10 ){
      hexa += resto
      hexa += quociente
    } else if ( resto == 10) {
      hexa += 'A'
      hexa += quociente
    } else if ( resto == 11) {
      hexa += 'B'
      hexa += quociente
    } else if ( resto == 12) {
      hexa += 'C'
      hexa += quociente
    } else if ( resto == 13) {
      hexa += 'D'
      hexa += quociente
    } else if ( resto == 14) {
      hexa += 'E'
      hexa += quociente
    } else if ( resto == 15) {
      hexa += 'F'
      hexa += quociente
    }
  } else {
    while ( resto > 16 ){
      resto = quociente % 16
      if ( resto == 10) {
        hexa += 'A'
      } else if ( resto == 11) {
        hexa += 'B'
      } else if ( resto == 12) {
        hexa += 'C'
      } else if ( resto == 13) {
        hexa += 'D'
      } else if ( resto == 14) {
        hexa += 'E'
      } else if ( resto == 15) {
        hexa += 'F'
      }
    }
  }

  // print(resto)

    
  //   resto = num_decimal % 16
  // }
  print(inverter_frase(hexa))
  // return inverter_frase(hexa)
}

main()