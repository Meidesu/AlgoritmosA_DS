#Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

def main():
  cabecalho('SOMA PA 1-N')

  final = int(input('Ultimo termo: '))

  soma_pa(final)
  rodape()

def soma_pa(final):
  contador = 1
  somatorio = 0
  while contador <= final:
    somatorio += contador
    contador += 1

  print(f'Somatório: {somatorio}')

# Funções de Apoio

def cabecalho(texto):
  print('-----------------------------------------------------------------\n')
  print(f'############ {texto} ############\n')

def rodape():
  print('\n-----------------------------------------------------------------')
main()