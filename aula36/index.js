const frutas = ['Pera', 'maça', 'Uva']

for (let index in frutas){
    console.log(index)
    console.log(frutas[index])
}

const pessoa ={
    nome: 'Diego',
    sobrenome:'Veiga',
    idade:17
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

const pessoas=[{nome:'minas', sobrenome:'Veiga', age:25},
             {nome:'dom', sobrenome:'Domeneget', age:33} ,
             {nome: 'danilo', sobrenome:'lacerda', age:27}]
/*for(let pessoa of pessoas){
    console.log(pessoa.nome)
}*/
console.log('for in ')
for( let p in pessoas){
    console.log(pessoas[p].nome)
}
// for classico = geralmentre com interaveis (array pou strings)
// for in  - Retorna o índice ou chave (strong, array ou objetos)
//for of  - Retorna  o valor em si (interaveis , arrays ou strings)