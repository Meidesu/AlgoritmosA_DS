import {readFileSync} from 'fs'
import { print } from './io_utils_.js'
    
export function import_files(path) {
  const dados = readFileSync(path, 'utf-8')
 
  return dados.split('\n') 
}

export function to_code(caractere) {
  return caractere.charCodeAt()
}

export function to_char(codigo) {
  return String.fromCharCode(codigo)
}

export function eh_maiuscula(caractere) {
  const cod =  to_code(caractere)
 
  return cod >= 65 && cod <= 90
}

export function eh_minuscula(caractere) {
  const cod =  to_code(caractere)
 
  return cod >= 97 && cod <= 122
}

export function my_map(lista, fun){
  let nova_lista = []

  for (let item of lista){
    nova_lista.push(fun(item))
  }

  return nova_lista
}

export function to_Number(str){
  if ( str != undefined ){
    return Number(str)
  } 
}

export function len(lista) {
  let contador = 0

  for( let intem in lista ){
    contador++
  }

  return contador
}

export function trocar_caracteres_maiusculos(frase, novo_char){
  let caractere_trocado = ''

  for ( let char of frase ){

    if ( eh_maiuscula(char) ){
      caractere_trocado += novo_char
    } else {
      caractere_trocado += char
    }

  }

  return caractere_trocado
}

export function trocar_caracteres(frase, antigo_char, novo_char){
  let caractere_trocado = ''

  for ( let char of frase ){

    if ( char == antigo_char ){
      caractere_trocado += novo_char
    } else {
      caractere_trocado += char
    }

  }

  return caractere_trocado
}

export function inverter_frase(frase){
  let frase_invertida = ''

  for( let i = len(frase)-1; i >= 0; i--){
    frase_invertida += frase[i]

  }

  return frase_invertida
}

export function mostrar_char_por_linha(frase){
  for ( let char of frase ){
    console.log(char)
  }

}

export function eh_numero(char){
  return to_code(char) >= 48 && to_code(char) <= 57
}

export function numero_por_extenso(char){
  const unidades = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
  const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

  const num = my_map(char.split(''), Number)
  let casa = len(num)
  let num_extenso =  ''

  for ( let alg of num ){
    if ( casa == 3 ) {
      num_extenso += centenas[alg] + ' e '
    
    } else if ( casa == 2 ) {
      num_extenso += dezenas[alg] 
      
    } else if ( casa == 1 ) {
      if ( num_extenso == ''){
        num_extenso += unidades[alg]

      } else {
        if ( alg !== 0 ){
          num_extenso += ' e ' + unidades[alg]
        } else {
          num_extenso += ''
        }
      }
    }
    casa--
    // console.log(num_extenso);
  }

  return num_extenso
}

export function my_split(str, char_quebra=' '){
  let partes = []
  let nova_str = ''
  
  if( char_quebra == '' ){
    for( let char of str ){
      partes.push(char)

    }
  } else {
    for ( let i = 0; i < len(str); i++){
    
      if ( str[i] == char_quebra ){
        partes.push(nova_str)
        nova_str = ''
        
      } else {
        nova_str += str[i]
      }
    }      
    partes.push(nova_str)
  }

  return partes
}

export function my_join(lista, separador=' '){
  let nova_str = ''

  for ( let i in lista ){
    if ( i == 0 ){
      nova_str += lista[i]

    } else {
      nova_str += separador + lista[i]

    }
  }

  return nova_str
}

export function pertence_a(candidato, lista){
  for ( let item of lista ){
    if( candidato == item ){
      return true
    }
  }

  return false
}