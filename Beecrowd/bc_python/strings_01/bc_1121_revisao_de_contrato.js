import { import_files, my_map } from "../my_io_utils.js"

function main() {
  const lines = import_files('teste/bc_1120.txt')
  
  const valores_falsos = encontrar_valores_digitados(lines)  

  console.log(valores_falsos)

}

function encontrar_valores_digitados(linhas){
  // const novas_linhas = []

  // for (let linha of linhas ){
  //   novas_linhas.push(comparar_caracteres(linha))

  // }
  const novas_linhas = linhas.map(comparar_caracteres)
  // console.log(novas_linhas);
  return novas_linhas.join('\n')
}

function comparar_caracteres(linha){
  // console.log(linha);
  const lines = linha.split(' ')
  const tecla_defeito = lines[0]
  const valor_real = lines[1]
  const tamanho = tamanho_string(valor_real)

  let valor_digitado = []

  for (let char = 0; char < tamanho; char++){
    // console.log(valor_real[char]);
    if( tecla_defeito == '0' ){
      return undefined

    } else if (valor_real[char] == tecla_defeito ){
      valor_digitado.push('')

    } else {
      valor_digitado.push(valor_real[char])

    }
  }
  
  // valor_digitado.push('n')

  return to_number(valor_digitado.join(''))
}

function tamanho_string(str){
  let counter = 0

  for (let i in str){
    counter++
  }

  return counter
}

function to_number(str){
  if(str == ''){
    return 0
  }else{
    return Number(str)
  }
}

main()