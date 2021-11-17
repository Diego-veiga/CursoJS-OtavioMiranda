function random(min , max   ){
    min*=1000
    max*=1000
   return Math.floor(Math.random() * (max -min) + min)
}


function esperaAi(msg, tempo){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            if(typeof msg !=='string') reject('Dados invalidos')
            resolve(msg)
        }, tempo);
    })
}

esperaAi('222',random(1,3))
.then(resposta => {
    console.log(resposta)
    return esperaAi(22222, random(1,3))
})
    .then(resposta =>  console.log(resposta))
.catch( resposta => console.log(resposta))


// function esperaAi(msg, tempo, cb){
//     setTimeout(() => {
//         console.log(msg)
//         if(cb) cb()
//     },tempo);
// }

// esperaAi('Espera ai 1', random(1,3), function(){
//     esperaAi('Espera ai 2', random(1,3), function(){
//         esperaAi('Espera ai 3', random(1,3))
//     })
// })

