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

 async function executa(){
   const fase1 = await esperaAi('fase1', 3000)
   console.log(fase1)
   const fase2 = await esperaAi('fase2', 3000)
   console.log(fase2)
   const fase3 = await esperaAi('fase3', 3000)
   console.log(fase3)
}


executa()