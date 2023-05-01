import { input_num_maior_que, input_num_numa_faixa,
         input_num_positivo, print, cabecalho, rodape } from "../../io_utils_.js";

// Feito em 1h, 29min e 17s

function main() {
  cabecalho('CALCULAR JUROS SOBRE UM EMPRESTIMO')
  const salario_minimo = 1320
  const selic = 13.75/100
  
  const renda_mensal = input_num_positivo('\n Informe a sua renda: R$')
  const valor_emprestimo = input_num_maior_que('\n Informe o valor do emprestimo (acima de um salario minimo): R$', salario_minimo)
  const prazo = input_num_numa_faixa('\n Informe a quantidade de parcelas (2-24x): ', 2, 24)

  const iof = calcular_iof(valor_emprestimo, prazo)

  const capital = iof + valor_emprestimo
  const total_pagar = calcular_juros_compostos(prazo, selic, capital)
  const juros_totais = total_pagar - capital
  const parcela = total_pagar / prazo

  const comprometimento_renda = comprometimento_de_renda(renda_mensal, parcela)
  const status = status_emprestimo(comprometimento_renda)
  
  print(`
  * Seu empréstimo é de R$${valor_emprestimo.toFixed(2)};
  * IOF: R$${iof.toFixed(2)};
  * Juros totais: R$${juros_totais.toFixed(2)};
  * Total a pagar: R$${total_pagar.toFixed(2)}:
  * Valor da parcela: ${prazo}x de R$${parcela.toFixed(2)}:
  * Comprometimento mensal de renda: ${comprometimento_renda}%
  * Status do emprestimo: ${status}
 `)

  rodape()
}

function calcular_iof(valor_emprestimo, prazo){
  const total_dias = prazo * 30
  const taxa = (total_dias * (0.0082/100)) + (0.38/100) 

  const iof = taxa * valor_emprestimo

  return iof
}

function calcular_juros_compostos(prazo, selic, capital_inicial) {
  let contador = 0
  let capital = capital_inicial
  const taxa = calcular_taxa_juros(prazo, selic)
  
  while ( contador <= prazo ){
    const juro_mes = capital * taxa
    capital += juro_mes

    contador++
  }

  return capital

}

function calcular_taxa_juros(prazo, selic) {
  if ( prazo <= 6 ){
    return selic * 0.5 
  }else if( prazo <= 12 ){
    return selic * 0.75
  }else if( prazo <= 18 ){
    return selic * 1
  }else{
    return selic * 1.3
  } 
}

function comprometimento_de_renda(renda_mensal, parcela){
  const porcent =  parcela / renda_mensal
  return porcent.toFixed(2)
}

function status_emprestimo(comprometimento_de_renda){
  if (comprometimento_de_renda <= 0.4){
    return 'Aprovado'
  } else {
    return 'Negado'
  }
}

main()