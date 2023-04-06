import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('teste/bc_1039.txt').split('\r\n').map(Number)
  
  const salario = lines[0]
  
  if ( salario > 0 && salario <= 2000.00 ) {
    console.log(`Isento`);
    return 
  }

  const imposto_renda = calc_imposto_renda(salario.toFixed(2))

  console.log(`R$ ${imposto_renda.toFixed(2)}`);

}

function calc_imposto_renda(salario) {
  
  if (salario > 2000 && salario <= 3000) {
    return (salario - 2000 ) * 0.08

  } else if ( salario > 3000 && salario <= 4500 ) {
    return 1000 * 0.08 + (salario - 3000 ) * 0.18 

  } else {
    return 1000 * 0.08 + 1500 * 0.18 + (salario - 4500 ) * 0.28

  }  

}

main()