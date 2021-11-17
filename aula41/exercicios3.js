function random (min, max){
    const r  =  Math.random() * (max - min) + min
    return Math.floor(r)
}

const numero = random(0,100)

const num = (numero)=>{
    if(!isNaN(numero)){
       if(numero %3 ===0 && numero % 5 ===0) return `${numero} FizzBuzz`
       if(numero %3 ===0 ) return  `${numero} Fizz`
       if(numero % 5 ===0) return  `${numero} Buzz`
       return numero

    }else{
        return 'Insira um valor do tipo numero'
    }
     
}

const resultado = num(numero)
console.log(resultado)