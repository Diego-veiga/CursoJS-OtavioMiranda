const a1 =[ 1,2,3]
const a2 = [4,5,6]

//juntando com o concat
const a3 = a1.concat(a2, [7,8,9],'luiz')
console.log(a3)

//juntando com o rest operator ...rest -> ...spread
const a4 = [...a1,...a2,'Diego',... [12,13,15]]
console.log(a3)
