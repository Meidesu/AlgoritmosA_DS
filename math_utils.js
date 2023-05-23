import { input_num_positivo, print } from "./io_utils_.js"

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
  return candidato % numero == 0
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

export function raiz(raiz, valor) {
  return valor ** (1/raiz)
}

