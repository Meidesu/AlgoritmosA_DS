import { import_files } from '../my_io_utils.js'

function main(){

  const lines = import_files('teste/bc_1049.txt')
  
  
  const carac_1  = lines[0]
  const carac_2  = lines[1]
  const carac_3  = lines[2]

  // console.log(carac_1, carac_2, carac_3)

  definir_nome_do_animal(carac_1, carac_2, carac_3)
  
}

function definir_nome_do_animal(carac_1, carac_2, carac_3){
/*     if (carac_1 == 'vertebrado'){
        if (carac_2 == 'ave'){
            if (carac_3 == 'carnivoro'){
                console.log('aguia')
                
            } else {
                console.log('pomba')
            }
                
        } else { 
            if( carac_3 == 'onivoro'){
                console.log('homem')
            } else { 
                console.log('vaca')
            }
        }
      
    } else {
        if( carac_2 == 'inseto'){
            if( carac_3 == 'hematofago'){
                console.log('pulga')
            } else {
                console.log('lagarta')
            }
        } else {
            if (carac_3 == 'hematofago'){
                console.log('sanguessuga')
            } else {
                console.log('minhoca')
            }
        }
    }
} */

  if (carac_1 == 'vertebrado'){
    if (carac_2 == 'ave') {
      if (carac_3 == 'carnivoro'){
        console.log('aguia')
        
      } else {
        console.log('pomba')
        
      }
    } else {
      if ( carac_3 == 'onivoro') {
        console.log('homem')
      } else {
         console.log('vaca')
      }
    }
  } else {
    if (carac_2 == 'inseto'){
      if( carac_3 == 'hematofago'){
        console.log('pulga')
      } else {
        console.log('lagarta')
      }
    } else {
      if (carac_3 == 'hematofago'){
        console.log('sanguessuga')
      } else {
        console.log('minhoca')
      }
    }
  }
}

main()