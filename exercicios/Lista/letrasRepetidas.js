let letras = ["a", "b", "a", "a", "c", "b"]
let letrasOrdenadas = letras.sort()
let letraUnica=''

for(let lo of letrasOrdenadas){
    if(lo !==letraUnica){
        letraUnica=lo
    }
}

console.log(`A letra que não se repete é:${letraUnica}`)

