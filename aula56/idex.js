function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        fala(assunto){
            return `${this.nome} esta falando sobre assunto ${assunto}`
        },
        set nomeCompleto(valor){
           valor = valor.split(' ')
           this.nome = valor.shift()
           this.sobrenome= valor.join(' ')

        },
         get nomeCompleto(){
             return `${this.nome}  ${this.sobrenome}`
         },
        altura: a,
        peso: p,
         get imc(){
            const indice  = this.peso /(this.altura**2)
            return indice.toFixed(2)
        }

    }
}
const p1 = criaPessoa('Luiz', 'Oatvio', 1.8,80)

p1.nomeCompleto='Diego Robero Veiga'
console.log(p1.fala('triste'))
console.log(p1.nomeCompleto)
console.log(p1.imc)