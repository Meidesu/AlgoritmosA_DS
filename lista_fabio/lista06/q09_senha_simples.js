import { cabecalho, input, input_secreto, rodape, print, input_num} from "../../io_utils_.js";


function main() {
  cabecalho()

  menu()

  let opcao = input_num(' >> ')
  let senha = ''

  while (opcao !== 0) {
    
    switch (opcao) {
      case 1:
        senha = input_senha_valida('Insira uma senha: ')
        const confirmacao = input_senha_valida('Confirme a senha: ')

        if (senha !== confirmacao) {
          print('As senhas não batem!!')

        } else {
          print('Tudo ok!!')

        }

        break;
        
      case 2:
        if ( senha == ''){
          print('Nenhum usuario cadastrado')

        } else {
          print('Insira suas informações de login: ')

          const usuario = input('Usuario: ')
          const input_senha = input_senha_valida('Senha: ')
  
          verificar_senha(senha, input_senha, usuario)

        }

        break;

      default:
        print('Escolha uma opção válida!')

        break;
    }
    
    limpar_tela()
    menu()
    opcao = input_num(' >> ')
  }

  print('Jyaa ne!!')

  rodape()
}

function menu(){
  print(`
  Escolha uma opção:
  1 - Definir senha;
  2 - Fazer login:
  0 - Sair
  `)
}

function input_senha_valida(cont='"Digite a senha: "'){
  let senha = input_secreto(cont)

  while (isNaN(Number(senha)) || senha == '' || senha == ' ') {
    print('Isira uma senha válida!!')
    senha = input_secreto(cont)
  }
  return senha
}

function limpar_tela(){
  input_secreto('\n<Enter>', ' ')
  console.clear()
}

function verificar_senha(senha, input_senha, usuario) {
 
  if (senha == input_senha) {
    print(`Seja bem-vindo ${usuario}!`)
  } else {
    print('Informações de login inválidas!!')
  }
}

main()