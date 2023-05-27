import { new_array } from "../../my_array_utils.js"
import { eh_par } from "../../math_utils.js"
import { print, cabecalho, rodape } from "../../io_utils_.js"

function main() {
  cabecalho()

  const lista1 = new_array()
  let lista2 = lista_par_impar(lista1)

  print(lista2)

  rodape()
}

function lista_par_impar(lista){
  let lista2 = []

  for (let item of lista) {
    if (eh_par(item)) {
      lista2.push(0)
    } else {
      lista2.push(1)
    }
  }

  return lista2
}

main()