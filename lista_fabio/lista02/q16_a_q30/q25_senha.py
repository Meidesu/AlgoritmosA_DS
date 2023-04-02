# #Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
# uma mensagem de permissão de acesso ou não.

def main():
  print('-----------------------------------------------------------------\n')
  print('-----------> VALIDAR SENHA <-----------\n')
  
  usuario = input('Informe o nome de usuário: ')
  input_senha = input('Informe a sua senha de login: ')

  if validar_senha(input_senha) == True:
    print('\nAcesso concedido!!!')
    print(f'\nBem vindo de volta {usuario}.')
  else:
    print('\nAcesso negado!!!\nVerifique as informações de login e senha.')

  
  print('\n-----------------------------------------------------------------')

def validar_senha(senha):
  return senha == '1234'

main()