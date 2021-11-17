function esperaAi(msg, tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof msg !=='string'){
               reject('Dados invalidos')
              return
            } 
            resolve(msg)
            return
        }, tempo);
    })
}

const promises = [esperaAi('Promise1',3000),esperaAi('Primise 2',4000),esperaAi('Promise3',5000)]

//resovle todas primises e devolve todos os resultados, mas se uma promise devolver erro todas outras seram perdidas
Promise.all(promises).then((valor => console.log(valor))).catch(valor => console.log(valor))

//devolve o resultado da primeira promise que for resolvida

Promise.race(promises).then( resposta => console.log(resposta)).catch( resposta => console.log(resposta))

function baixarpagina(){
    const cache = false
    if(cache){
        return Promise.resolve('pagina em cahce')
    } else{
        return esperaAi('baixando a pagina', 8000)
    }
}

baixarpagina().then( resposta => console.log(resposta)).catch( resposta => console.log(resposta))