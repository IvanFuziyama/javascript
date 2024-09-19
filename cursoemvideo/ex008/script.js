
function Verificar(){
    var vel = Number(document.getElementById('velocidade').value)
    var res = document.getElementById('resultado')
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}</strong>Km/h</p>`
    if(vel>=60){
        res.innerHTML += `<p>Você foi MULTADO por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija com segurança!</p>`
}
