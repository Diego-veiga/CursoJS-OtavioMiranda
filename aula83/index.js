class controleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    //metodo de classe
    aumentarVolume(){
        this.volume +=2
    }

    diminuirVolume(){
        this.volume -=2
    }

    static trocaPilha(){
        console.log('ok vou trocar')
    }
}


const c1 = new controleRemoto('LG')

c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
 
console.log(c1)
 controleRemoto.trocaPilha()
