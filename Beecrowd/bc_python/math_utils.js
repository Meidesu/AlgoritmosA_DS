import { input_num_positivo } from "./io_utils_.js"

export function eh_primo(num){
  let contador = num
  let divisores = 0

  if (eh_par(num) && num !== 2){
      return false
  }

  while (contador >= 1){
      if ( num % contador == 0){
          divisores++
      } 
      contador--
  }

  return divisores == 2
}

export function eh_par(num){
  return num % 2 == 0
}

export function eh_multiplo(numero, candidato){
  return candidato % numero == 0 || numero % candidato == 0
}

export function media_de_n_numeros(quantidade){
  let contador = 1
  let somatorio = 0
  while ( contador <= quantidade ){
    somatorio += input_num_positivo(`Insira o ${contador}º numero: `)
    contador++
  } 
  return somatorio / quantidade
}

export function maior_de_n_numeros(qnt){
  let contador = 2
  let numero = input_num_positivo(`Insira o 1° numero: `)
  let maior = numero
  while ( contador <= qnt ){
    numero = input_num_positivo(`Insira o ${contador}° numero: `)
    if (numero > maior){
      maior = numero
    }
    contador++
  }
  return maior
}

export function menor_de_n_numeros(lista){
  // const tamanho = lista.length 
  let menor = lista[0]

  for ( let elemento of lista ){
    if( elemento < menor ){
      menor = elemento
    }
  }

  return menor
}

export function ordenar_valores(lista){
  const len = lista.length
  let lista_ordenada = lista
  
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
  return lista_ordenada
}

export function raiz(raiz, valor) {
  return valor ** (1/raiz)
}
