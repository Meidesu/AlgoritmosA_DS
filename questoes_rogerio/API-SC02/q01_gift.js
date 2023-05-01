import { input, print, input_num_positivo, cabecalho, input_num, rodape } from "../../io_utils_.js"


function main() {
  cabecalho('CALCULO MENSAL DE CASHBACK')
  
  let nome = input('>Nome do cliente ou <Enter> para parar: ')
  let cashback_destribuido = 0
  let faturamento_total = 0
  let maior_cashback = 0
  let menor_cashback = Infinity
  let produtos_vendidos = 0


  while ( nome !== '' ){
    let total_compras = input_num_positivo('\n>Informe a quantidade de compras este mes: ')
  
    let total_cashback = 0
    let contador = 1
    
    while ( contador <= total_compras ){

      let valor_compra = input_num('\n>Valor da compra: R$')
      
      let cashback = calcular_cashback_por_faixa(valor_compra)
      
      print(`>Cashback ganho pela compra: R$${cashback.toFixed(2)}\n`)

      faturamento_total += valor_compra

      if (cashback > maior_cashback){
        maior_cashback = cashback
      }

      if (cashback < menor_cashback){
        menor_cashback = cashback
      } 
  
      total_cashback += cashback 
      
      contador++
      
    }
    
    produtos_vendidos += total_compras

    cashback_destribuido += total_cashback

    print(`
  * Total de cashback recebido por ${nome} este mês é de R$${total_cashback.toFixed(2)}.
    `)
    
    nome = input('>Nome do cliente ou <Enter> para parar: ')
  }

  const media_cashback = cashback_destribuido/produtos_vendidos
  
  if(produtos_vendidos == 0){
    print('\nNenhuma venda efetuada neste mês!!')
  }else{
    print(`
  * Faturamento Total: R$${faturamento_total}
  * Total de cashback distribuido: R$${cashback_destribuido}
  * Maior cashback: R$${maior_cashback}
  * menor cashback: R$${menor_cashback.toFixed(2)}
  * Media em cashback: R$${media_cashback.toFixed(2)}
    `)
  }

  rodape()
}

function calcular_cashback_por_faixa(valor) {
  if ( valor <= 250 ){
    return valor * 0.05
  } else if ( valor <= 500 ){
    return valor * 0.07
  } else if ( valor <= 750 ){
    return valor * 0.08
  } else{
    return (valor - 750) * 0.25 + 50
  }
}

main()