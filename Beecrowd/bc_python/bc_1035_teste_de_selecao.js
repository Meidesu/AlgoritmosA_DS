import { question } from "readline-sync";

let input = question('Dados: ')
let lines = input.split('\n')
let valores = lines[0].split(' ')    

function main() {

    const a = Number(valores[0])
    const b = Number(valores[1])
    const c = Number(valores[2])
    const d = Number(valores[3])

    if (valores_aceitos(a, b, c, d)){
        console.log('Valores aceitos')
    }else{
        console.log('Valores nao aceitos')
    }

}

function valores_aceitos(a, b, c, d){
    return b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 == 0
}

main()