let umaString ="Um texto"
let outraString ="Um\" texto\""
console.log(outraString,'outraString')

//para pegar uma posição na string
console.log(umaString.charAt(6))

//para concatenar obs: a mesma coisa do 
console.log(umaString.concat(' ','um',' ','lindo',' ', 'dia'))

//localizar um elemento na string 
console.log(umaString.indexOf('t'))
 
//localziar um texto a partir de uma posição
console.log(umaString.indexOf('t',4))

//localizar um elemento olhando de traz para frente
console.log(umaString.lastIndexOf('o',4))

//loacalizar elementos atravez de regex
console.log(umaString.match(/[a-z]/))

//localizar uma elemento por regex  OBS: retorna a posição do elemento
console.log(umaString.search(/[t]/g))

//substituir uma elemento por outro
console.log(umaString.replace('Um', 'uma'))
console.log(umaString.replace(/t/, 'L'))
console.log(umaString.replace(/t/g, 'L'))

//tamanho da string 
console.log(umaString.length)

//quebrar a string de acordo oma condição
console.log(umaString.split(' '))

//deixa a string maiuscula
console.log(umaString.toUpperCase())

//deixa a string maiuscula
console.log(umaString.toLowerCase())




 
