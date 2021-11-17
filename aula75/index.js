const objA={
    chaveA: 'A'
}

const objB={
    chaveB: 'B'
}

const objC = new Object()
objB.chaveC = 'C'

Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)

console.log(objB.chaveA)
console.log(objC.chaveA)


function Produto(nome, preco){
    this.nome  = nome;
    this.preco = preco
}

 Produto.prototype.desconto = function(percentual){
     this.preco = this.preco -( this.preco * (percentual /100))
 }

 Produto.prototype.aumento = function(percentual){
    this.preco = this.preco +( this.preco * (percentual /100))
}

const p1 = new Produto('Queijo', 50)

p1.aumento(50)
console.log(p1)