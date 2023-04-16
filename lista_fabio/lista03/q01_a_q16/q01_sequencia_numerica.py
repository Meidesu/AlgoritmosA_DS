# Leia N e escreva todos os números inteiros de 1 a N.

def main():
  cabecalho('SEQUÊNCIA NUMERICA')
  
  final = int(input('Informe o último numero: '))

  sequencia_numerica(final)

  rodape()

def sequencia_numerica(final):
  i = 1
  
  while i <= final:

    print(i)
    i += 1

#Funções de Apoio

def cabecalho(texto):
  print('-----------------------------------------------------------------\n')
  print(f'############ {texto} ############\n')

def rodape():
  print('\n-----------------------------------------------------------------')

main()