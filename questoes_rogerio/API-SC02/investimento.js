import { cabecalho, input, input_num_numa_faixa, 
         input_num_positivo, print, rodape } from '../../io_utils_.js'
        
// Feito em 1h, 06min e 28s

function main() {
  cabecalho('INVESTIMENTO')

  print('Olá Mariana.')
  const objetivo = input('Qual o seu objetivo?\n> ')
  const valor_necessario = input_num_positivo('\nDe quanto voce precisa para realiza-lo?\n>R$ ')

  const salario = input_num_positivo('\nQuanto eh o seu salario?\n>R$ ')
  const porcent_ao_mes = input_num_numa_faixa('\nQual a porcentagem do seu salario que voce deseja investir?\n> ', 1, 30)

  const taxa_juros = input_num_numa_faixa('\nQual a taxa de juros do investimento escolhido? (0.01%-1%)\n> ',      0.01, 1)

  const investido_ao_mes = calcular_o_valor_investido(salario, porcent_ao_mes) 
  
  let saldo = 0
  let total_meses = 0

  while ( saldo < valor_necessario ){

    saldo += investido_ao_mes
    saldo += calular_rendimento(saldo, taxa_juros)
    
    total_meses++ 
  } 

  mostrar_tempo_necessario(total_meses)

  rodape()
}

function calular_rendimento(saldo, taxa_juros){
  return saldo * (taxa_juros/100)
}

function calcular_o_valor_investido(salario, porcent_ao_mes) {
  return salario * (porcent_ao_mes / 100)
}

function mostrar_tempo_necessario(total_meses){
  if(total_meses < 12){
    if (total_meses == 1){
      print(`\n> Neste ritmo, em ${total_meses} mes, você realizará seu objetivo.`)

    }else{
      print(`\n> Neste ritmo, em ${total_meses} meses, você realizará seu objetivo.`)

    }
  }else{
    const anos = Math.floor( total_meses / 12 )
    const meses = Math.floor( total_meses % 12 )

    if(meses == 0){
      if ( anos == 1 ){
        print(`\n> Neste ritmo, em exatamente ${anos} ano, você realizará seu objetivo.`)

      }else{
        print(`\n> Neste ritmo, em exatamente ${anos} anos, você realizará seu objetivo.`)

      }
    } else {
      if ( anos == 1 ){
        print(`\n> Neste ritmo, em ${anos} ano e ${meses} meses, você realizará seu objetivo.`)

      }else{
        print(`\n> Neste ritmo, em ${anos} anos e ${meses} meses, você realizará seu objetivo.`)

      }
    
    }

  }

}

main()