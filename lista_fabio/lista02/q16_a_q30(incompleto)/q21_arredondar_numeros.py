#Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
# maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
# contrario, é arredondado para o inteiro imediatamente inferior.

def main():
  print('-----------------------------------------------------------------\n')
  print('-----------> ARREDONDAR NUMERO <-----------')

  num = float(input('\nInsira um número: '))

  num_arredondado = arredondar_numero(num)

  print(f'\nO numero arredondado é: {num_arredondado}')
  print('\n-----------------------------------------------------------------')

def arredondar_numero(num):
  parte_inteira = num // 1
  parte_fracionaria = num - parte_inteira

  if parte_fracionaria >= 0.5:
    return parte_inteira + 1
  else:
    return parte_inteira

main()