import { question } from "readline-sync";

// Obter os dados do usuário
let pesoAtual = Number(question("Qual é o seu peso atual em kg?"));
let metaPeso = Number(question("Qual é a sua meta de redução de peso em %?")) / 100;
let numSemanas = Number(question("Em quantas semanas você quer alcançar essa meta?"));
let kcalConsumo = Number(question("Quantas calorias você está disposto a consumir diariamente?"));

// Calcular o déficit calórico necessário
const kcalPorKg = 7700;
const diasPorSemana = 7;
const deficitCalorico = (pesoAtual * metaPeso * kcalPorKg) / (numSemanas * diasPorSemana);

// Calcular a quantidade máxima de calorias que o usuário pode consumir diariamente
const kcalMaximas = kcalConsumo - deficitCalorico;

// Exibir o resultado na tela
console.log(`Para alcançar sua meta de redução de ${metaPeso * 100}% de peso em ${numSemanas} semanas, você precisa de um déficit calórico diário médio de ${deficitCalorico.toFixed(2)} kcal.`);
console.log(`Para isso, a quantidade máxima de calorias que você pode consumir diariamente é de ${kcalMaximas.toFixed(2)} kcal.`);
