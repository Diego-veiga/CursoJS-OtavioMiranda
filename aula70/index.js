//forma de lietral de criar um objeto 
const pessoa ={
    nome: 'Diego',
    sobrenome:'Veiga',
    Objectfreeze()
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])


const pessoa1 = new Object()
pessoa1.nome='Bia'
pessoa1.sobrenome='Pavao'
pessoa1.idade =27
pessoa1.obterNome = function(){
    return (`${this.nome} esta falando seu nome`)
}
pessoa1.getDataNascimento = function(){
    const DataAtual = new Date()
    return DataAtual.getFullYear() - this.idade
}

console.log(pessoa1.obterNome())
console.log(pessoa1.getDataNascimento())