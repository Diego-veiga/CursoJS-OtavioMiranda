//função construtora -> objetos
//Função fabrica -> objeto
//Construtora -> (new)

function Pessoa( nome, sobrenome){
    // atributo privadas 
    const ID =123456

    //metodos privados
    const metodoInterno = function(){

    }

    this.nome= nome,
    this.sobrenome=sobrenome

    this.metodo = function(){
        console.log(this.nome + ':sou um metodo')
    }
    
}

const p1 = new Pessoa('Diego', 'Veiga')
p1.metodo()
