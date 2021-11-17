const numeros = [1, 5, 6, 8, 2, 7, 14, 25, 95, 36]

const numerosPares = numeros.filter(valor =>valor%2===0).map(valor => valor * 2).reduce((ac, valor)=> ac+=valor)
console.log('numerosPares',numerosPares)