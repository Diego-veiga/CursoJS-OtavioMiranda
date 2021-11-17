function Soma(num1 ,num2){
    if(typeof num1 === 'number' && typeof num2 ==='number'){
        return num1 + num2
    }else{
         throw new Error('O valores fornecidos precisam ser do tipo numero')
    }
}

try{
    console.log(Soma('2',3))

}catch(error){
   
    console.log(error)
}