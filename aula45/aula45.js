function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }
   
    if(!data){
        
        data= new Date()
    }

    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false,
    })
}
try{
    const hoje = new Date('01-01-1985 12:58:12')
    const data = retornaHora()
    console.log(data)
}catch(e){
    console.log(e)
}finally{
    console.log('Tenha um bom dia')
}
