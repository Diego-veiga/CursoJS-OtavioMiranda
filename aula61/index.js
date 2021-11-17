function* gerador1(){
    //codigo qualquer
    yield 'Valor1';
    //código qualquer
    yield 'Valor 2'
    //Código qualquer
    yield 'Valor 3'
}

const g1  =  gerador1()

console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())
console.log(g1.next())