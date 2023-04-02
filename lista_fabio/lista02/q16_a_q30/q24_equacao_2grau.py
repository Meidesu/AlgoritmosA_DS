# Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
# coeficiente A deve ser diferente de 0 (zero).

def main():
  print('-----------------------------------------------------------------\n')
  print('-----------> RESOLUÇÃO DE EQUAÇÃO DO 2º GRAU <-----------\n')

  a = int(input('Coeficiente a: '))
  b = int(input('Coeficiente b: '))
  c = int(input('Coeficiente c: '))
  
  
  if a != 0:
    delta = calculo_delta(a, b, c)
    x1 = calculo_raizes(a, b, delta, 1)
    x2 = calculo_raizes(a, b, delta, 2)
    
    print(f'Raizes da equação:\n x1 = {x1}\n x2 = {x2}')
  else:
    print('Insira um valor para "a" diferente de 0 ')
  
  print('\n-----------------------------------------------------------------')

def calculo_delta(a, b, c):
  return b**2 - (4 * a * c)

def calculo_raizes(a, b, delta, n):
  if n == 1:
    return (-b + (delta)**0.5) / (2 * a)
  else: 
    return (-b - (delta)**0.5) / (2 * a)


main()