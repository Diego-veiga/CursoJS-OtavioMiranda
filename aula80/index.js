 const pessoas =[
     {id:1,nome:'Sergio', idade:25},
     {id:2,nome:'Diogo', idade:35},
     {id:3,nome:'Mandioquinha', idade:52},
    
 ]


 const newPessoas = new Map()

 for (const pessoa of pessoas){
     const {id} = pessoa
     newPessoas.set(id, {...pessoa})
 }

 console.log(newPessoas)

 newPessoas.delete(2)
 

 console.log(newPessoas)

 for(const pessoaa of newPessoas.values()){
     console.log(pessoas)
 }  