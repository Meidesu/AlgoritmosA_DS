#Leia um número, calcule e escreva seu fatorial.

def main():
  cabecalho('FATORIAL DE UM NÚMERO')

  numero = int(input('Insira um numero: '))

  while numero <= 0:
    print('Insira um numero positivo!')
    numero = int(input('Insira um numero: '))

  print(fatorial(numero))

  rodape()

def fatorial(num):
  if num == 1:
    return num
  elif num == 2:
    return num  
  else:
    return num * fatorial(num-1)
  

# Funções de Apoio

def cabecalho(texto):
  print('-----------------------------------------------------------------\n')
  print(f'############ {texto} ############\n')

def rodape():
  print('\n-----------------------------------------------------------------')

main()