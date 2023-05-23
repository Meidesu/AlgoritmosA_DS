import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_1581.txt')

  const num_casos = lines[0]

  for( let linha = 1; linha < len(lines) ; linha++){

    if ( eh_numero(lines[linha]) ){
      let idiomas_iguais = true
      let num_pessoas = Number(lines[linha])
      const idioma_atual = linha + 1
      
      for( let idioma = 1; idioma < num_pessoas; idioma++ ){
          const idioma_anterior = idioma + linha
          const idioma_posterior = idioma_anterior + 1

          idiomas_iguais = lines[idioma_atual] == lines[idioma_posterior]
      }
      
      if(idiomas_iguais){
        console.log(lines[idioma_atual])
      } else {
        console.log('ingles')
      }
    }
  }
  console.log();
}

function eh_numero(char){
  return char.charCodeAt() >= 48 && char.charCodeAt() <= 57
}

function len(lista) {
  let contador = 0

  for( let intem in lista ){
    contador++
  }

  return contador
}

main()