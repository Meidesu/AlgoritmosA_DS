import {readFileSync} from 'fs'

export function import_files(path) {
  const dados = readFileSync(path, 'utf-8')
 
  return dados.split('\r\n') 
}

export function to_code(caractere) {
  return caractere.charCodeAt()
}

export function to_char(codigo) {
  return String.fromCharCode(codigo)
}

export function eh_maiuscula(caractere) {
  const cod =  ord(caractere)
 
  return cod >= 65 && cod <= 90
}

export function eh_minuscula(caractere) {
  const cod =  ord(caractere)
 
  return cod >= 97 && cod <= 122
}