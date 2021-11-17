class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }
    
    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
            
        })
        
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camaposSaoValidos()
        
    }
    
    camaposSaoValidos(){
        let valid = true

        for( const erros of this.formulario.querySelectorAll('.error-text')){
            erros.remove()
        }
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} não pode estar em branco`)
                 valid=false
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid=false
            }
       }
    }

    validaCPF(campo){
         const cpf = new  ValidaCPF(campo.value)
         if(!cpf.valida()){
             this.criaErro(campo, 'CPF invalido')
             return false

         }
         return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend' , div)
    }

}

const valida = new ValidaFormulario()