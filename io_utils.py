def input_int(cont='Insira um numero: '):
  try:
    num = int(input(cont))
  except ValueError:
    print('Insira um número válido!')
    num = input_int(cont)

  return num

def input_float(cont='Insira um numero: '):
  try:
    num = float(input(cont))
  except ValueError:
    print('Insira um número válido!')
    num = input_int(cont)

  return num

def input_int_positivo(cont='Insira um numero positivo: '):
    num = input_int(cont)

    while (num <= 0 ):
        print('Por favor insira um número positivo!')
        num = input_int(cont)

    return num

def input_float_positivo(cont='Insira um numero positivo: '):
    num = input_float(cont)

    while (num <= 0 ):
        print('Por favor insira um número positivo!')
        num = input_float(cont)

    return num

def input_num_numa_faixa(cont, inicio, final):
    num = input_int(cont)

    while (num < inicio or num > final):
        print(f'Por favor insira um número entre {inicio} e {final}!!')
        num = input_int(cont)

    return num

def input_num_maior_que(cont, minimo):
    num = input_int(cont)

    while (num < minimo):
        print(f'Por favor insira um número maior que {minimo}!!')
        num = input_int(cont)

    return num

def cabecalho(txt='###'):
    print('-----------------------------------------------------------------\n')
    print(f'############### {txt} ###############\n')

def rodape():
  print('\n-----------------------------------------------------------------')


