class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome
    }

    get nomeCompleto(){
        return `${this.nome}  ${this.sobrenome}`
    }

    set nomeCompleto(valor){
        valor  = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
    
}


function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome}  esta falando`)
}

const p1 = new Pessoa('Diego', 'Veiga')

p1.nomeCompleto='Diego Veiga Silva'
console.log(p1.nomeCompleto)