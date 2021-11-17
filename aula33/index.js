const numeros =[1,2,3,4,5,8,6,9]

const [a,b] = numeros
const [ , ,c,d, ...resto]=numeros

console.log(a,b)
console.log(c,d,resto)



const pessoa ={
   nome: 'Diego',
   sobrenome:'Veiga',
   idade:30,
   endereco:{
       rua:'Av Brasi',
       numero: 320
   }
};

//atribuição via desetruturação

const { nome , sobrenome} = pessoa
const {endereco} = pessoa
const {endereco:{rua, numero}} = pessoa

console.log(nome, sobrenome)
console.log(rua, numero)
console.log(endereco)