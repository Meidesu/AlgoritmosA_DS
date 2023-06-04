import {
  cabecalho,
  input,
  input_secreto,
  rodape,
  print,
  input_num
} from '../../io_utils_.js'

function main() {
  cabecalho()

  menu()

  let opcao = input_num(' >> ')

  let usuarios = []
  let senhas = []

  while (opcao !== 0) {
    switch (opcao) {
      case 1:
        print('\nCadastrar novo usuário: ')

        const usuario = input('Insira um nome de usuário: ')
        const senha = input_senha_valida('Insira uma senha: ')
        const confirmacao = input_senha_valida('\nConfirme a senha: ')

        if (senha !== confirmacao) {
          print('\nAs senhas são diferentes!!')
        } else {
          usuarios.push(usuario)
          senhas.push(senha)

          print('\nTudo ok!!')
        }

        break

      case 2:
        if (senhas.length == 0) {
          print('\nNenhum usuario cadastrado')
        } else {
          print('\nInsira suas informações de login: ')

          const usuario = input('\nUsuario: ')
          const indice_usuario = procurar_usuario(usuario, usuarios)

          if (indice_usuario != undefined) {
            const input_senha = input_senha_valida('Senha: ')

            if (senha_valida(senhas, input_senha, indice_usuario)) {
              print(`Bem-vindo ${usuario}`)
            } else {
              print(`Senha inválida!!`)
            }
          } else {
            print('Usuário não encontrado!!')
          }
        }

        break

      default:
        print('Escolha uma opção válida!')

        break
    }

    limpar_tela()
    menu()
    opcao = input_num(' >> ')
  }

  print('Jyaa ne!!')
  rodape()
}

function menu() {
  print(`
  Escolha uma opção:
  1 - cadastrar usuário;
  2 - Fazer login:
  0 - Sair
  `)
}

function input_senha_valida(cont = '"Digite a senha: "') {
  let senha = input_secreto(cont)

  while (senha == '' || senha == ' ') {
    print('Insira uma senha válida!!')
    senha = input_secreto(cont)
  }

  return senha
}

function limpar_tela() {
  input_secreto('\n<Enter>', ' ')
  console.clear()
}

function senha_valida(senhas, senha, indice_usuario) {
  return senha == senhas[indice_usuario]
}

function procurar_usuario(usuario, usuarios) {
  for (let i in usuarios) {
    if (usuarios[i] == usuario) {
      return i
    }
  }
}

main()
