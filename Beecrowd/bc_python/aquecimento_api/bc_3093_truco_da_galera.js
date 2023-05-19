import { import_files, my_map } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_3093.txt')
  
  const total_testes = Number(lines[0])

  for ( let teste = 1; teste <= total_testes; teste++ ){
    if ( estam_presente(lines[teste]) ){
      console.log('Aaah muleke')
    } else {
      console.log('Ooo raca viu')
    }
    // print(lines[teste])
  }  
}

function estam_presente(line) {
  let q = false
  let j = false
  let k = false
  let a = false
  
  for ( let i = 0; i < line.length; i++ ){
    if ( line[i] == 'Q' ){
      q = true
    } else if ( line[i] == 'J' ){
      j = true
    } else if ( line[i] == 'K' ){
      k = true
    } else if ( line[i] == 'A' ){
      a = true
    }  
    // print(line[i])
  }
  
  return a && k && j && q  
}

main()