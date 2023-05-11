import { question } from "readline-sync";

let input = question('Dados: ')
let lines = input.split('\n')
function main() {
    let valores = lines[0].split(' ').map(Number)

    let a = valores[0]
    let b = valores[1] 
    let c = valores[2]
    let delta = b**2-4*a*c

    if (a === 0 | delta < 0) {
        console.log('Impossivel calcular')
        } else {
        let r1 = calcular_raiz(delta, b, a, 'r1')
        let r2 = calcular_raiz(delta, b, a, 'r2')
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
    }
 
}

function calcular_raiz(delta, b, a, r) {
    if ( r == 'r1' ){
        return (-1 * b + Math.sqrt(delta))/ (2 * a)
    } else {
        return (-1 * b - Math.sqrt(delta))/ (2 * a)
    }
}

main()
