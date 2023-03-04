import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1012.txt').split('\r\n')//<----
  
  let valores = lines[0].split(' ')
  let v_1 = Number(valores[0])
  let v_2 = Number(valores[1])
  let v_3 = Number(valores[2])

  let area_triangulo = (v_1*v_3)/2
  let area_circulo = (v_3**2) * 3.14159
  let area_trapezio = ((v_1 + v_2) * v_3)/ 2
  let area_quadrado = v_2**2
  let area_retangulo = v_1 * v_2

  console.log(`TRIANGULO: ${area_triangulo.toFixed(3)}\nCIRCULO: ${area_circulo.toFixed(3)}\nTRAPEZIO: ${area_trapezio.toFixed(3)}\nQUADRADO: ${area_quadrado.toFixed(3)}\nRETANGULO: ${area_retangulo.toFixed(3)}`)

}

main()