
const numeros = [1, 5, 6, 8, 2, 7, 14, 25, 95, 36]

const total = numeros.reduce((total, valor) =>{
  return total += valor    
},0)

console.log('total', total)

const Pessoas = [
        { nome: 'Diego', idade: 25 },
        { nome: 'Danilo', idade: 30 },
        { nome: 'Dom', idade: 20 },
        { nome: 'Tina', idade: 23 },
        { nome: 'tiago', idade: 45 },
        { nome: 'galera', idade: 15 },
    ]


 const maiorIdade = Pessoas.reduce((maiorIdade, pessoa)=>{
      if (maiorIdade.idade > pessoa.idade)  return maiorIdade
      return pessoa
 },0)

 console.log('maiorIdade', maiorIdade)


 const itens = [
     {contador: 1, produto:'Banana', quantidade:1, precoVenda:3.50},
     {contador: 2, produto:'suco', quantidade:1, precoVenda:7.90},
     {contador: 3, produto:'cerveja', quantidade:1, precoVenda:5.62},
     {contador: 4, produto:'carne', quantidade:1, precoVenda:27.80},
     {contador: 5, produto:'bala', quantidade:1, precoVenda:0.30},
     {contador: 6, produto:'feijao', quantidade:15, precoVenda:6.50}
]

 const itemComtotal = itens.map(itens=>{
     const newItem= {...itens}
      newItem.total = itens.quantidade * itens.precoVenda
      return newItem
 })

 const totalCompra = itemComtotal.reduce((total, valorTotalItem)=>{
   return total +=valorTotalItem.total
 },0)
console.log('itemComtotal',itemComtotal)
console.log('totalCompra',totalCompra)

const itemPesquisa = itens.filter(item=> item.produto ==='suco')
console.log('itemPesquisa',itemPesquisa)