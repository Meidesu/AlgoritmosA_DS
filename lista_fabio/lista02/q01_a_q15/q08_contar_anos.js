import { question } from "readline-sync";

/*Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos). */

function main() {
  print('-----------------------------------------------------------------\n')
  print('****************CALCULAR IDADE****************\n')
  print('-----------> Informe a data atual <-----------------------')
  const dia_atual = input('Dia: ')
  const mes_atual = input('Mes: ')
  const ano_atual = input('Ano: ')

  print('-----------> Informe a sua data de nascimento <-----------')
  const dia_nasc = input('Dia: ')
  const mes_nasc = input('Mes: ')
  const ano_nasc = input('Ano: ')

  const idade = contar_anos(dia_atual, dia_nasc, mes_atual, mes_nasc, ano_atual, ano_nasc)

  print(`Sua idade é: ${idade}`)

  print('\n-----------------------------------------------------------------')
}

function contar_anos(da, dn, ma, mn, aa, an) {
  const diff_anos = aa - an
  if( ma >= mn && da >= dn ) {
    return diff_anos
  } else {
    return diff_anos - 1
  }
}

function input(cont) {
  const input = Number(question(cont))

  return input
}
function print(cont) {
  const print = console.log(cont)

  return print
}

main()

/*   function contar_anos(da, dn, ma, mn, aa, an) {
    const ano_dias = (aa - an) * 365
    const mes_dias = (ma - mn) * 30
    const total_dias = ano_dias + mes_dias + (da - dn)
  
    const anos_eq = Math.floor(total_dias / 365) 
    const meses_eq = Math.floor(total_dias % 365 / 30) 
    const dias_eq = Math.floor(total_dias % 365 % 30) 
  
    return `${dias_eq} ano(s), ${meses_eq} mes(es) e ${anos_eq} dia(s).`
  } */