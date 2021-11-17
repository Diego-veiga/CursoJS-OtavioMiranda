 const numero = Number(prompt('Digite um numero'))
 const numeroTitulo = document.getElementById('numero-titulo')
 const texto = document.getElementById('texto')

 
 numeroTitulo.innerHTML = numero
 texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p></br>
<p>${numero} é inteiro: ${Number.isInteger(numero)}
 <p> é NaN: ${isNaN(numero)}</p></br>
 <p>Arredondando para baixo: ${Math.floor(numero)}</p></br>
 <p>Arredondando para cima: ${Math.ceil(numero)}</p></br>
 <p>Com duas casas decimais: ${numero.toFixed(2)}}</p></br>`




