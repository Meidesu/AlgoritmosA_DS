import chalk from 'chalk'
import { print, input_num} from '../io_utils_.js'
import { limpar_tela } from './patrocars_utils.js'


export function menu(opcoes) {

  print(opcoes)

  return input_num('  >> ')
}

