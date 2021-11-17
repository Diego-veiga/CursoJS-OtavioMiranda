// filter sempre vai retornar um novo array

const numeros = [1, 5, 6, 8, 2, 7, 14, 25, 95, 36]

const numerosDobrados = numeros.map(numero => numero*2)
console.log(numerosDobrados)


const Pessoal = [
        { nome: 'Diego', idade: 25 },
        { nome: 'Danilo', idade: 30 },
        { nome: 'Dom', idade: 20 },
        { nome: 'Tina', idade: 23 },
        { nome: 'tiago', idade: 45 },
        { nome: 'galera', idade: 15 },
    ]
    

    const nomes = Pessoal.map(pessoa =>  pessoa.nome)
    const idades = Pessoal.map( pessoa => ({idade:pessoa.idade}))

    console.log('nomes',nomes)
    console.log('idades',idades)
    

 /*** adicionado um campo no objeto */
  /*const pessoasComId = Pessoal.map( (pessoa,indice) => {
       pessoa.id = indice

       return pessoa
  })
    
  console.log('pessoasComId',pessoasComId)
  console.log('Pessoal',Pessoal)*/


    /****** para não alterar o array principal */

    const pessoacomId = Pessoal.map((pessoa, indice)=>{
        const newPessoa = {...pessoa}
        newPessoa.id = indice
        return newPessoa
    })
    console.log('pessoacomId',pessoacomId)
    console.log('Pessoal',Pessoal)


   
