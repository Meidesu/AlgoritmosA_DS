import { question } from "readline-sync";

let input = question('Dados: ')
let lines = input.split('\n')
let valores = lines[0].split(' ')    

function main() {

    const num_1 = Number(valores[0])
    const num_2 = Number(valores[1])
    const num_3 = Number(valores[2])

    const maior = achar_o_maior(num_1, num_2, num_3)

    console.log(`${maior} eh o maior`)

}

function achar_o_maior(n1, n2, n3){
    let maior = n1

    if ( n2 > maior ){
        maior = n2
    }
    if( n3 > maior ){
        maior = n3
    }
    return maior
}

main()