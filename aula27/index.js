 // (condicao) ? 'Valor para verdadeiro' : 'Valor parea falso'

const pontuacaoUsuario =1000
const nivelusuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = null

const corPadrao =  corUsuario || 'Preta'

console.log('prova',nivelusuario,corPadrao)