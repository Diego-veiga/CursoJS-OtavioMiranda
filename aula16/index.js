const alunos =['Luiz', 'Maria', 'Joao']

//adicionar  no final do array
alunos.push('Luiza')

// adiciona no começo
alunos.unshift('Fabio')

//remove do final 
alunos.pop()

//remove  no começo
alunos.shift()

//deletar de uma posição especifica 
delete alunos[1]

//verificando se é um array
console.log(typeof alunos)
console.log(alunos instanceof Array)
