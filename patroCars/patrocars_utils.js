import { input_secreto, print } from "../io_utils_.js";
import { readFileSync } from "fs";


export function limpar_tela() {
  input_secreto('\n<Enter>', '')
  console.clear()
}

export function import_files(path) {
  const dados = readFileSync(path, 'utf-8')
 
  return dados.split('\n') 
}

export function del(lista, index) {
  if (index >= 0 && index < lista.length) {
    lista.splice(index, 1);
  }
}