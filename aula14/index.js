let num1 =10.5689741563
let num2 = 6

//transformar em string
console.log(num2.toString()+num1)

//transformar em binario
console.log(num2.toString(2))

//remover casas decimais
console.log(num1.toFixed(2))

//verificar se é um numero inteiro 
console.log(Number.isInteger(num2))

// verificar se é um NaN
let temp = num2 + 'ola'
console.log(temp)
console.log(Number.isNaN(temp))
//padrão IEEE 754-2008
//precisão dos numeros
let num3=0.7
let num4=0.1

num3 +=num4  //0.8
num3 +=num4  //0.9
num3 +=num4  //1.0

num3 = Number(num3.toFixed(2))

console.log('num3',num3)
console.log(Number.isInteger(num3))




