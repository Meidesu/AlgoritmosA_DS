import { ulid } from "ulidx";
import { input_num, input_num_positivo, input_str_tam_minimo, print } from "../io_utils_.js";
// import { import_files } from "../my_strings_utils.js";
import fs from "fs";
import { del, import_files, limpar_tela } from "./patrocars_utils.js";
import { menu } from "./patrocars_menu.js";
import chalk from "chalk";

export function inicializar_montadoras() {
  const linhas = import_files('montadoras.txt')
  const montadoras = []

  for (let linha of linhas ){
    if (!linha) continue

    const carac = linha.split('#')

    montadoras.push({'id': carac[0],
                   'nome': carac[1], 
                   'pais': carac[2], 
                   'ano': carac[3]})
  }

  return montadoras
}

export function criar_nova_montadora(montadoras){

  const id = ulid()
  const nome = input_str_tam_minimo('  Nome da montadora: ', 1).trim()
  const pais = input_str_tam_minimo('  Pais de origem: ', 1).trim()
  const ano = input_num_positivo('  Ano de fundacao: ')

  montadoras.push({id, nome, pais, ano})
}

export function listar_itens_montadora(montadoras) {
  console.clear()

  print(`\n\t  ${chalk.bgWhite.black((' Montadoras: '))}`)

  for ( let montadora of montadoras ){
    print(`
___________________________________________  
                                  
  Id......: ${montadora['id']}
  Nome....: ${montadora['nome']}
  Pais....: ${montadora['pais']}
  Ano.....: ${montadora['ano']}`)
  } 

  print('___________________________________________')
}

export function salvar_dados(montadoras){
  const menu_salvar = `
  +----------------+  
  |  Salvar dados? |
  |  1 - Sim       |
  |  2 - Não       |
  +----------------+ `

  let opcao = menu(menu_salvar)

  switch (opcao) {
    case 1:
      let dados = ''
      
      for ( let montadora of montadoras ){
        const id = montadora['id']
        const nome = montadora['nome']
        const pais = montadora['pais']
        const ano = montadora['ano']

        dados += `${id}#${nome}#${pais}#${ano}\n`
      }

      fs.writeFileSync('montadoras.txt', dados)

      print(chalk.green('\n  Atualizações salvas com sucesso!!'))
      break;

    case 2:
      print(chalk.redBright('\n  As alterções não foram salvas!!'))
      break;
  
    default:
      print(chalk.redBright('  Escolha uma opção válida!!'))
      salvar_dados(montadoras)
      break;
  }

  
}

export function atualizar_montadora(montadoras) {
  let opcao = menu(listar_montadoras(montadoras))
  
  while ( opcao < 0 || opcao > montadoras.length - 1 ){
    print(chalk.redBright('  Opção inválida!!'))
  
    limpar_tela()

    opcao = menu(listar_montadoras(montadoras))
  } 

  const montadora = montadoras[opcao]

  montadora['nome'] = input_str_tam_minimo('  Nome: ') || montadora['nome']  
  montadora['pais'] = input_str_tam_minimo('  Pais: ') || montadora['pais']
  montadora['ano'] = input_num('  Ano: ') || montadora['ano']
  
  print(chalk.green('  Montadora atualizada com sucesso!!'))
}

export function listar_montadoras(montadoras) {
  console.clear()

  let menu_montadoras = `
  ${chalk.bgWhiteBright.black('Selecione uma montadora:')}`

  for ( let i = 0; i < montadoras.length; i++ ){
    menu_montadoras += ` ${i} - ${montadoras[i]['nome']}\n`

  }

  return menu_montadoras
}

export function remover_montadora(montadoras) {
  
  let opcao = menu(listar_montadoras(montadoras))

  while ( opcao < 0 || opcao > montadoras.length ){
    print(chalk.redBright('  Opção inválida!!'))

    limpar_tela()
    
    opcao = menu(listar_montadoras(montadoras))
  } 

  del(montadoras, opcao)
}