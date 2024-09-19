function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('resultado')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resul = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: <strong>${resul}</strong>`
}