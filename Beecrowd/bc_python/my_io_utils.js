import {readFileSync} from 'fs'

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