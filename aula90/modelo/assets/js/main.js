/*const request = obj =>{
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
   
}*/

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
    
    const response = await fetch(href)
    
    if(response.status !== 200 ) throw new Error('ERRO')
    
    const html = await response.text()
    carregarResultado(html)
}

function carregarResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}