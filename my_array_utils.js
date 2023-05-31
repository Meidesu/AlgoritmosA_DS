import { eh_numero } from "./my_strings_utils.js"
import { input, input_num_positivo   } from "./io_utils_.js"

export function new_array_padrao(tamanho, padrao=0) {
  let new_array = new Array(tamanho)

  for ( let i = 0; i < tamanho; i++ ){
    new_array[i] = padrao

  }
  
  return new_array
}

export function new_array(label='Informe o tamanho da lista: '){
  const tamanho = input_num_positivo(label)
  let lista = new_array_padrao(tamanho)

  for ( let i in lista ){
    lista[i] = input(`Valor do indice ${i}: `)
  }  

  return lista
}

export function new_array_aleatorio(tamanho, min=0, max=101){
  let lista = new_array_padrao(tamanho)
  
  for ( let i in lista ){
     lista[i] = Math.floor(Math.random() * (max - min) + min)
  }  

  return lista
}

export function len(lista) {
  let contador = 0

  for( let intem in lista ){
    contador++
  }

  return contador
}

export function my_map(lista, fun){
  let nova_lista = []

  for (let item of lista){
    nova_lista.push(fun(item))
  }

  return nova_lista
}

export function inverter_lista(lista){
  let lista_invertida = []

  for( let i = len(lista)-1; i >= 0; i--){
    lista_invertida.push(lista[i]) 

  }

  return lista_invertida
}

export function my_sort(lista, crescente=false){
  const len = lista.length
  let lista_ordenada = lista
  
  if ( crescente ){
    for ( let volta = len; volta >= 0; volta-- ){
      for(let i = len; i >= 0; i--){
        if( lista[i] >= lista[1+i] ){
          const intermediario = lista_ordenada[i]
          lista_ordenada[i] = lista_ordenada[i+1]
  
          lista_ordenada[i+1] = intermediario
          // console.log(lista_ordenada)
        }
      }
    }  
  } else {
    for ( let volta = 0; volta < len; volta++ ){
      for(let i = 0; i < len; i++){
        if( lista[i] <= lista[1+i] ){
          const intermediario = lista_ordenada[i]
          lista_ordenada[i] = lista_ordenada[i+1]
  
          lista_ordenada[i+1] = intermediario
          // console.log(lista_ordenada)
        }
      }
    }
  }

  return lista_ordenada
}

export function to_number(num) {
  if ( eh_numero(num) ){
    return Number(num)

  } else {
    return num

  }

}

function pertence_a(candidato, lista){
  for ( let item of lista ){
    if( candidato == item ){
      return true
    }
  }

  return false
}
