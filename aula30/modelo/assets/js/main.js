/*function retornaDiaSemana(dia){
    console.log(dia)
    let diaSemana=''
    switch(dia){
        case 0:
           return diaSemana='Domingo'
       case 1:
           return diaSemana='Segunda-feira'
       case 2:
           return diaSemana='Terça-feira'
       case 3:
          return diaSemana='Quarta-feira'
       case 4:
           return diaSemana='Quinta-feira'
       case 5:
           return diaSemana='Sexta-feira'
       case 6:
           return diaSemana='Sabado'
    }
}
function RetornaMes(mes){
  let mesEscrito
    switch(mes){
        case 0:
           return mesEscrito='Janeiro'
       case 1:
           return mesEscrito='Fevereiro'
       case 2:
           return mesEscrito='Março'
       case 3:
          return mesEscrito='Abril'
       case 4:
           return mesEscrito='Maio'
       case 5:
           return mesEscrito='Junho'
       case 6:
           return mmesEscritoes='Julho'
       case 7:
           return mesEscrito='Agosto'
       case 8:
           return mesEscrito='Setembro'
       case 9:
           return mesEscrito='Outubro'
        case 10:
            return mesEscrito='Novembro'
        case 11:
           return mesEscrito='Dezembro'
   }
}
function RetornaDataCompleta(data){
    const diaDaSemana =retornaDiaSemana(data.getDay()) 
    const dia = data.getDate()
    const mes = RetornaMes(data.getMonth()) 
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minutos = data.getMinutes()

    return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`
}


function main(){
    const data = new Date()
    const conteudohtml = document.querySelector('.container')
    console.log(conteudohtml)
    conteudohtml.innerHTML=RetornaDataCompleta(data)

}

main();*/

const data = new Date()
const conteudohtml = document.querySelector('.container')
conteudohtml.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'})

