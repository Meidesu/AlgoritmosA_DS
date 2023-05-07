from sys import path
path.append('..//..//..//')
from io_utils import cabecalho, input_int, rodape

#Leia N e escreva todos os números inteiros de 1 a N.
 
def main():
  cabecalho('LISTAR TODOS OS NUMEROS ATE N')
  
  final = input_int('Informe o valor de n: ')

  for i in range(final):
    if i+1 == final:
      print(f'{i+1}.')
    else:  
      print(i+1, end=', ')
    
  rodape()

main()