 const produto = { nome:'Caneca', preco:1.8};
 // via spread operator
 const newProduto = {...produto, material:'Porcelana'}


 const caneca = Object.assign({}, produto,{material:'Porcelana'})

 console.log(produto)
 console.log(newProduto)
 console.log(caneca)

 const produto1 = { nome:'produto1', preco:1.8};
 Object.defineProperty(produto1, 'nome',{
     writable:false,
     configurable:false,
     value:'qualquer coisa'

 })
 ///getOwnPropertyDescriptor(objeto, propridade) / retorna as carateriscas da propriedade
 console.log(Object.getOwnPropertyDescriptor(produto1,'nome'))

 //Object.entries retorna chave e valor do objeto 
 for(let [chave, valor] in Object.entries(produto1)){
     console.log(chave,valor)
 }