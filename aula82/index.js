class dispositivoEletronico{
    constructor(nome,marca ){
        this.nome = nome;
        this.marca = marca;
        this.ligado=false
    }

    ligar(){
        if(this.ligado) return
        this.ligado= true
    }

    desligar(){
        if(!this.ligado) return
        this.ligado = false
    }
}

class smartPhone extends dispositivoEletronico{

    constructor(nome, marca,modelo){
        super(nome, marca)
        this.modelo = modelo
        
    }

    ligar(){
        if(this.ligado){
            consolelog('ja esta ligado')
        }else{
            this.ligado=true
        }
    }
}