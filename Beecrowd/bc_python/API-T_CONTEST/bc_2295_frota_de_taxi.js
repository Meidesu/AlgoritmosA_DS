import { import_files } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_2295.txt')

  const [ 
          preco_alc,
          preco_gas,
          consumo_alc,
          consumo_gas 
        ] = lines[0].split(' ').map(Number)
  
        
  const ex_alcool = calcular_gasto(preco_alc, consumo_alc)
  const ex_gasolina = calcular_gasto(preco_gas, consumo_gas)

  if ( ex_gasolina <= ex_alcool ){
    console.log('G')

  } else {
    console.log('A')
    
  }

}

function calcular_gasto(preco, consumo){
  const ex_ditancia = 25

  return (ex_ditancia * preco) / consumo
}


main()