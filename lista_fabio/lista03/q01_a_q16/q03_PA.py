# #Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Aritmética que tem por valor inicial A0 e razão R.

from typing import final


def main():
  cabecalho('PROGRESSÃO ARITMÉTICA')

  inicio = int(input('Primeiro termo: '))
  final = int(input('Ultimo termo: '))
  razao = int(input('Razão: '))

  progressao_aritmetica(inicio, final, razao)
  
  rodape()

def progressao_aritmetica(inicio, final, razao):
  i = inicio

  while i <= final:
    print(f'> {i}')
    i += razao

# Funções de Apoio

def cabecalho(texto):
  print('-----------------------------------------------------------------\n')
  print(f'############ {texto} ############\n')

def rodape():
  print('\n-----------------------------------------------------------------')
main()