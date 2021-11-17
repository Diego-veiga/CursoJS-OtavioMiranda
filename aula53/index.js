function retornaFuncao(nome){
    return function(){
        return nome
    }
}

const funcao = retornaFuncao('Diego')
const funcao2 = retornaFuncao('denis')

console.dir(funcao)
console.dir(funcao2)