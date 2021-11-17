function Produto(nome ,preco, estoque){
    this.nome = nome;
    this.preco = preco;
    get: function(){
        return preco
    }

    let estoquePrivado
    
    Object.defineProperty(this, 'estoque',{
        enumerable:true, //mostra a chave
        configurable:true, // configuravel
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if (typeof valor !=='number') {
               throw new Error('O valor deve ser do tipo numero')
            }
            estoquePrivado =valor
        }
    })
}

const p1 = new Produto('Camiseta',20, 3)
p1.estoque = 500
console.log(p1.estoque)
console.log('p1.preco',p1.preco)
