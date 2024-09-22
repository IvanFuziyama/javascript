function Calcular(){
    var n = Number(document.getElementById('numero').value)
    var tab = document.getElementById('tab')
    tab.innerHTML=""

    for(var x = 0; x <= 10; x++){
        var item = document.createElement('option')
        item.text = `${n} x ${x} = ${n*x}`
        item.value = `tab${x}`
        tab.appendChild(item)
    }
}