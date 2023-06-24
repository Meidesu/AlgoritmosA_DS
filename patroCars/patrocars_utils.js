import { input_secreto, print } from "../io_utils_.js";
import { readFileSync } from "fs";
import chalk from "chalk";


export function limpar_tela() {
  input_secreto('\n <Enter>', '')
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

export function texto_vermelho(label) {
  return chalk.redBright(label)
}

export function texto_verde(label) {
  return chalk.greenBright(label)
}

export function fundo_branco(label) {
  return chalk.bgWhiteBright.black(label)
}

export function texto_amarelo(label) {
  return chalk.yellowBright(label)
}

export function plural_perfeito(len){
  if ( len === 1 ){
    return `Total: ${len} montadora cadastrada.`
  } else {
    return `Total: ${len} montadoras cadastradas.`
  }
}