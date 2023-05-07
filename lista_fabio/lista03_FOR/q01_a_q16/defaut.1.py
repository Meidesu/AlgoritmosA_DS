from sys import path
path.append('..//..//..//')
from io_utils import cabecalho, input_int, rodape

#Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela
#Progressão Aritmética que tem por valor inicial A0 e razão R.
 
def main():
  cabecalho('PROGRESSÃO ARITMÉTICA')
  
  primeiro_termo = input_int('Primeiro termo: ')
  ultimo_termo = input_int('Ultimo termo: ')
  razao = input_int('Razão: ')

  calcular_pa(primeiro_termo, ultimo_termo, razao)

  print()

  rodape()

def calcular_pa(a0, an, r):
  
  for i in range(a0, an+1, r):
    if i == an:
      print(f'{i}.')
    else:
      print(f'{i}', end=', ')

main()