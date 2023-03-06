import { question } from "readline-sync";

/**/

console.log(`
Insira duas equações no modelo: 
ax + by = c;
dx + ey = f.
Com base no modelo infome os valores de:
`)

const a = Number(question('a: '))
const b = Number(question('b: '))
const c = Number(question('c: '))
const d = Number(question('d: '))
const e = Number(question('e: '))
const f = Number(question('f: '))

const x = (c*e - b*f) / (a*e - b*d)
const y = (a*f - c*d) / (a*e - b*d)

console.log(`
resultado:
x = ${x}
y = ${y}
`)