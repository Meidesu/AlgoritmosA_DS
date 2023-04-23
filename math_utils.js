export function eh_primo(num){
  let contador = num
  let divisores = 0

  if (eh_par(num) && num !== 2){
      return false
  }

  while (contador >= 1){
      if ( num % contador == 0){
          divisores++
      } 
      contador--
  }

  return divisores == 2
}

export function eh_par(num){
  return num % 2 == 0
}

export function eh_multiplo(numero, candidato){
  return candidato % numero == 0
}