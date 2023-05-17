def inverter_frase(frase):
  frase_invertida = ''
  tamanho = len(frase)

  for i in range(tamanho - 1, -1, -1):
    frase_invertida += frase[i]
    
  return frase_invertida