const elementos =[
    {tag:'p', texto:'Frase 1'},
    {tag:'div', texto:'Frase 2'},
    {tag:'footer', texto:'Frase 3'},
    {tag:'section', texto:'Frase 4'},
]

const container =document.querySelector('.container')

for(let i=0; i<=3;i++){
    let {tag, texto} = elementos[i]
    let elementoCriado=criaElemento(tag)
   adicionaTextoElemento(elementoCriado, texto)
   container.appendChild(elementoCriado)
   
}

function criaElemento(elemento){
    return document.createElement(elemento)
}
function adicionaTextoElemento(elemento, texto){
    let textoCriado= document.createTextNode(texto)
    elemento.appendChild(textoCriado)
}


