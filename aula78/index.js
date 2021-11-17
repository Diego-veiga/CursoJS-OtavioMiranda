function Conta(agencia, conta, saldo ){
    this.agencia =agencia;
    this.conta = conta;
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(` Saldo insuficiente ${this.saldo}`)
        this.verSaldo()
        return
    }else{
        this.saldo -=valor
        this.verSaldo()
    }

   
}

Conta.prototype.deposita = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}


const conta1 = new Conta(11 ,22,11)

// conta1.deposita(11)
// conta1.deposita(10)
// conta1.sacar(100)
// conta1.sacar(0.01)


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)

ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente ${this.saldo + this.limite}`)
        return
    }else{
        this.saldo -=valor
        this.verSaldo()
    }
}

const cc  = new ContaCorrente(10,11, 100,100)

cc.sacar(180)