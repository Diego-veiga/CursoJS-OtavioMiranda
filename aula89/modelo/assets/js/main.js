const request = obj =>{
    return new Promise((sucess, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()
        xhr.addEventListener('load', ()=>{
            if(xhr.status >=200 && xhr.status < 300){
                sucess(xhr.responseText)
            }else{
               reject(xhr.statusText)
            }
        })
    })
   
}

document.addEventListener('click', e =>{
    const el = e.target
    const tag = el.tagName.toLowerCase()
    if( tag  === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

 async function carregaPagina(el){
    const href = el.getAttribute('href')
    const objConfig ={
        method:'GET',
        url: href
    }

   const response= await request(objConfig)
      carregarResultado(response)
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}