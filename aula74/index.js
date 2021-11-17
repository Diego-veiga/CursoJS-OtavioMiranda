 function Pessoa(nome, sobrenome){
     this.nome = nome;
     this.sobrenome = sobrenome

    
 }

 const pessoa = new Pessoa('Diego', 'Veiga')
 const pessoa1 = new Pessoa('Minas', 'Silva')

 Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome}  ${this.sobrenome}`
 }

 pessoa.nomeCompleto()
 pessoa1.nomeCompleto()

 console.dir(pessoa.nomeCompleto())
 console.dir(pessoa1.nomeCompleto())