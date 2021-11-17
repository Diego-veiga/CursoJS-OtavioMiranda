const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos=0
let timer

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

function IniciaRelogio(){
     timer = setInterval(() => {
        segundos ++;
        relogio.innerHTML=criaHoraDosSegundos(segundos)
    }, 1000);
   
}

iniciar.addEventListener('click', function(evento){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    IniciaRelogio()
})

pausar.addEventListener('click', function(){
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(){
    segundos=0
    relogio.innerHTML='00:00:00'
    clearInterval(timer)
})