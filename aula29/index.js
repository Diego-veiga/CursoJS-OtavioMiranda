const data= new Date('1987-04-16 00:00:00')
let diaSemana = data.getDay()
let diaSemanaTexto=''

function diaDaSemana(diaSemana){
    switch(diaSemana){
        case 0:
           return diaSemanaTexto='Domingo'
        case 1:
           return diaSemanaTexto='Segunda'
        case 2:
            return  diaSemanaTexto='Terça'
        case 3:
            return  returndiaSemanaTexto='Quarta'
        case 4:
            return diaSemanaTexto='Quinta'
        case 5:
            return diaSemanaTexto='Sexta'
        case 6:
            return  diaSemanaTexto='Sabado'
        default:
            return 'Dia Indefinido' 
    }
}

console.log('diaSemana: ',diaSemana, ' diaSemanaTexto',diaDaSemana(diaSemana))
