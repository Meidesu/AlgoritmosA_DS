from sys import path
path.append('..//..//')
from io_utils import cabecalho, rodape

#Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
# consoantes deverão ser substituídas pelo caractere '#'.
 
def main():

  frase = input('Frase a ser invertida: ')
  
  frase_invertida = inverter_frase(frase)

  print(frase_invertida)

  rodape()

def inverter_frase(frase):
  frase_invertida = ''
  tamanho = len(frase)

  for i in range(tamanho - 1, -1, -1):
    frase_invertida += frase[i]
    
  return frase_invertida


main()