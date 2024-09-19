function somar(){
    var n1 = Number(document.getElementById('txtn1').value)
    var n2 = Number(document.getElementById('txtn2').value)
    var res = document.getElementById('resultado')
    var resul = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: <strong>${resul}</strong>`
}