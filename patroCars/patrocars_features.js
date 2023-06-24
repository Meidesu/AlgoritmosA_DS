import { ulid } from "ulidx";

import fs from "fs";

import { input_num, 
         input_num_positivo, 
         input_str_tam_minimo, 
         print } from "../io_utils_.js";

import { del, fundo_branco, 
         import_files, 
         limpar_tela, 
         texto_amarelo, 
         texto_verde, 
         texto_vermelho } from "./patrocars_utils.js";

import { menu } from "./patrocars_menu.js";

export function listar_montadoras(montadoras, label) {
  console.clear()

  let menu_montadoras = 
`${fundo_branco(`\n\t\t ${label} \n`)}\n`

  for ( let i = 0; i < montadoras.length; i++ ){
    menu_montadoras += `  ${i+1}: ${montadoras[i]['nome']}\n`

  }

  menu_montadoras += texto_amarelo('  0: Voltar\n')

  return menu_montadoras
}

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
  console.clear()

  print(fundo_branco('\n\t\t Cadastrar montadora \n'))

  const id = ulid()
  const nome = input_str_tam_minimo('  Nome da montadora: ', 1).trim()
  const pais = input_str_tam_minimo('  Pais de origem: ', 1).trim()
  const ano = input_num_positivo('  Ano de fundacao: ')

  montadoras.push({id, nome, pais, ano})

  print(texto_verde('\n  Montadora cadastrada com sucesso!!'))

  limpar_tela()
}

export function listar_itens_montadora(montadoras) {
  console.clear()

  const num_montadoras = montadoras.length

  if(num_montadoras === 0){
    print(texto_vermelho('\n  Nenhuma montadora cadastrada!!'))
    return
  }

  print(`\n\t  ${fundo_branco(('\n\t\t Montadoras: '))}`)

  for ( let montadora of montadoras ){
    print(`
___________________________________________  
                                  
  Id......: ${montadora['id']}
  Nome....: ${montadora['nome']}
  Pais....: ${montadora['pais']}
  Ano.....: ${montadora['ano']} `)

  } 

  print('___________________________________________')

  limpar_tela()
}

export function salvar_dados(montadoras){
  const menu_salvar = `
  + ——————————————— +
  │  Salvar dados?  │
  │    1 - Sim      │
  │    2 - Não      │ 
  + ——————————————— + `
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

      print(texto_verde('\n  Atualizações salvas com sucesso!!'))
      break;

    case 2:
      print(texto_vermelho('\n  As alterções não foram salvas!!'))
      break;
  
    default:
      print(texto_vermelho('  Escolha uma opção válida!!'))
      salvar_dados(montadoras)
      break;
  }

  limpar_tela()
}

export function atualizar_montadora(montadoras) {
  let opcao = menu(listar_montadoras(montadoras, 'Atualizar montadora:'))
  
  while ( opcao < 0 || opcao > montadoras.length ){
    print(texto_vermelho('  Opção inválida!!'))
  
    limpar_tela()

    opcao = menu(listar_montadoras(montadoras, 'Atualizar montadora:'))
  } 

  if (opcao === 0){
    return
  } 

  const montadora = montadoras[opcao-1]

  montadora['nome'] = input_str_tam_minimo('  Nome: ') || montadora['nome']  
  montadora['pais'] = input_str_tam_minimo('  Pais: ') || montadora['pais']
  montadora['ano'] = Number(input_str_tam_minimo('  Ano: ')) || montadora['ano']
  
  print(texto_verde('  Montadora atualizada com sucesso!!'))

  salvar_dados(montadoras)

}

export function remover_montadora(montadoras) {
  
  let opcao = menu(listar_montadoras(montadoras, 'Remover montadora:'))

  while ( opcao < 0 || opcao > montadoras.length ){
    print(texto_vermelho('  Opção inválida!!'))

    limpar_tela()
    
    opcao = menu(listar_montadoras(montadoras, 'Remover montadora:'))
  } 

  if (opcao === 0){
    return
  } 
  
  del(montadoras, opcao-1)

  print(texto_verde('\n  Montadora removida com sucesso!!'))

  salvar_dados(montadoras)
}