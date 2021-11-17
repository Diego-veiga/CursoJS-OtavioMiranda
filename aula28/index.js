const data = new Date(0) // 01/01/1970 Timestamp unix ou época unix 

console.log(data)

const dataetalhada  = new Date(2019,3,1); // a , m , d , h, M, s , ms

const dataString  = new Date('2019-04-20 20:15:59.250')

console.log('Dia', dataString.getDate())
console.log('Mês', dataString.getMonth()+1) // Mês começa do zero 
console.log('Ano', dataString.getFullYear())
console.log('Hora', dataString.getHours())
console.log('Minutos', dataString.getMinutes())
console.log('Segundos', dataString.getSeconds())
console.log('milessegundos', dataString.getMilliseconds())
console.log('Dia da semana', dataString.getDay()) //0 -Domingo, 6 -Sábado

function zeroAEsquerda(num){
    return num>=10?num:`0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth()+ 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const d = new Date()
const dataBrasil = formataData(data)
console.log('dataBrasil',dataBrasil)