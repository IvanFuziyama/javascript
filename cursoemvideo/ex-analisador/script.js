let n = document.querySelector('input#numero')
let tab = document.querySelector('select#tab')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(isNumero(n.value) && !inLista(n.value, valores)){
        window.alert('Tudo OK')     
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}
function Finalizar(){
    
}