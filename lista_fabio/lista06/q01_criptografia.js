import { input, print, rodape } from "../../io_utils_.js"
import { eh_maiuscula, len } from "../../my_strings_utils.js"

/* Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, 
a frase deverá ser invertida e as consoantes deverão ser substituídas 
pelo caractere '#'. */

function main(){
  // print(len('sdj'))
  const frase = input('Frase a ser invertida: ')
    // print(frase)

  const frase_invertida = inverter_frase(frase)
  const caractere_trocado = trocar_caracteres(frase_invertida, '#')


  // print(frase_invertida)
  print(caractere_trocado)


  rodape()
}

function inverter_frase(frase){
  let frase_invertida = ''

  for( let i = len(frase)-1; i >= 0; i--){
    frase_invertida += frase[i]

  }

  return frase_invertida
}

function trocar_caracteres(frase, novo_char){
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
  
main()  