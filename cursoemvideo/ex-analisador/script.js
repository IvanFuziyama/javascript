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
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado`
        tab.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    n.value=''
    n.focus()
}
function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor=valores[pos]
            }
        }
        media = soma / total
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${total} números cadastarados</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML+=`<p>O menor valor inofrmado foi ${menor}</p>`
        res.innerHTML+=`<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores digitados é ${media}</p>`
    }
}