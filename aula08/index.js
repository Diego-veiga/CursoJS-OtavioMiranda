/* luiz otavio tem 30 anos, pesa 84 KG
tem 1.8 de altura e seu imc é de 25,92
luiz otavio nasceu em 1980
**/

const nome='Diego'
const sobrenome = 'Veiga'
const idade =30
const peso=84
const altura =1.80
let IMC;
let anoNascimento
IMC = peso / (altura * altura)

 let dataAtual = new Date().getFullYear()
 anoNascimento =dataAtual - 30
console.log(`${nome} ${sobrenome}, tem ${idade}, e pesa ${peso} KG tem ${altura} seu IMC é de ${IMC} `)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)