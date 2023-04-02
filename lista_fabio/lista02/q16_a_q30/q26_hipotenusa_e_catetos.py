#Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

def main():
  print('-----------------------------------------------------------------\n')
  print('-----------> IDENTIFIQUE A HIPOTENUSA E OS CATETOS DE UM TRIANGULO <-----------\n')
  print('Insira os três lados do triangulo:')

  lado1 = int(input('Lado um: '))
  lado2 = int(input('Lado dois: '))
  lado3 = int(input('Lado três: '))

  if validar_triangulo(lado1, lado2, lado3) == True:
    hipotenusa = calcular_hipotenusa(lado1, lado2, lado3)
    cateto1 = cateto(lado1, lado2, lado3, 1)
    cateto2 = cateto(lado1, lado2, lado3, 2)

    print(f'\nHipotenusa: {hipotenusa}\nCateto 1: {cateto1}\nCateto 2: {cateto2}')

  else:
    print('\nInforme um triângulo com lados válidos.')


  print()
  print('\n-----------------------------------------------------------------')

def cateto(l1, l2, l3, n) :
  if n == 1:
    if l1 <= l2 and l1 <= l3:
      return l1
    elif l2 <= l1 and l2 <= l3:
      return l2    
    elif l3 <= l1 and l3 <= l2:
      return l3
  else:
    if (l1 >= l2 and l1 <= l3) or (l1 <= l2 and l1 >= l3):
      return l1
    elif (l2 >= l1 and l2 <= l3) or (l2 <= l1 and l2 >= l3):
      return l2
    else:
      return l3

def calcular_hipotenusa(l1, l2, l3):
  if l1 > l2 and l2 > l3:
    return l1
  elif l2 > l1 and l2 > l3:
    return l2
  else:
    return l3

def validar_triangulo(l1, l2, l3):
  if l1 + l2 >= l3 and l1 + l3 >= l2 and l2 + l3 >= l1:
    return True
  else:
    return False

main()