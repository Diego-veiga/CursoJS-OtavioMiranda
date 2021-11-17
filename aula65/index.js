// filter sempre vai retornar um novo array

const numeros = [1, 5, 6, 8, 2, 7, 14, 25, 95, 36]

const numeromaiorquedez = numeros.filter(numero => numero > 10)

console.log(numeromaiorquedez)


// const Pessoal = [
    //     { nome: 'Diego', idade: 25 },
    //     { nome: 'Diego', idade: 25 },
    //     { nome: 'Danilo', idade: 30 },
    //     { nome: 'Dom', idade: 20 },
    //     { nome: 'Tina', idade: 23 },
    //     { nome: 'tiago', idade: 45 },
    //     { nome: 'galera', idade: 15 },
    
    // ]
    
    
    const pessoasnew = Pessoal.filter(pessoa => pessoa.idade > 25)

console.log(pessoasnew)