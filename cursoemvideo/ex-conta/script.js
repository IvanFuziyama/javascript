function Contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('ERRO faltam dados!')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p<=0){
            //se for 0 buga, pois fica em um loop infinito
            window.alert('Passo inválido" Considerado como 1')
            p = 1;
        }
        if (i < f) {
            // crescente
            for (var x = i; x <= f; x += p) {
                res.innerHTML += `${x} `
            }
        } else {
            // decrescente
            for (var x = i; x >= f; x -= p) {
                res.innerHTML += `${x} `
            }

        }
        res.innerHTML+= `FIM`
    }
}