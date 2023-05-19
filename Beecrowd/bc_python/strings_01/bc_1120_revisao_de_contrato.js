import { import_files, my_map } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1120.txt')
  
  const valores_falsos = encontrar_valores_digitados(lines)  

  console.log(valores_falsos)

}

function encontrar_valores_digitados(linhas){
  const novas_linhas = []
  // console.log('linhas', linhas)
  for (let linha of linhas ){
    console.log('linha da vez' , linha)
    novas_linhas.push(comparar_caracteres(linha))
  }
  // const novas_linhas = comparar_caracteres(linhas)

  return novas_linhas.join('\n')

}
function comparar_caracteres(linha){
  const lines = linha.split(' ')
  const tecla_defeito = lines[0]
  const valor_real = lines[1]
  let valor_digitado = []

  console.log(tecla_defeito)
  console.log(valor_real)

  for ( let char of valor_real ){
    if( tecla_defeito == '0' ){
      return undefined
      // console.log(valor_digitado)
    } else if (char == tecla_defeito ){
      valor_digitado.push('')
    } else {
      valor_digitado.push(char)
    }
      //char == tecla_defeito && tecla_defeito !== '0'
    console.log(valor_digitado);
  }
  
  return Number(valor_digitado.join(''))

  // return valor_digitado.filter(   )

}

// function to_number(linha) {
//     if ( linha != undefined ){
//       return Number(linha)
//     } 
// }

main()