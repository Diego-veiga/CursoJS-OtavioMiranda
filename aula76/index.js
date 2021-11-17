function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

 Produto.prototype.aumento = function(quantia){
     this.preco += quantia
 }

 Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
 }

 function Camiseta(nome, preco, cor){
     Produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta


const p = new Produto('Chuteira', 99.1)
const c = new Camiseta('regata',78.45,'azul')

console.log(p)
console.log(c)