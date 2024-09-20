function Carregar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.querySelector('div#resultado')//querySelector - mais moderno

    if(fano.value.length == 0 && fano.value.length <= 1850|| fano.value > ano){
        window.alert('ERRO Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 4){
                //bebe
                img.src = 'img/bebe.jpg'
            }else if(idade <= 15){
                //crianca
                img.src = 'img/crianca-mas.jpg'
            }else if(idade <= 23){
                //jovem
                img.src = 'img/jovem-mas.jpg'
            }else if( idade <= 60){
                //adulto
                img.src = 'img/adulto-mas.jpg'
            }else if(idade  <= 125){
                //idoso
                img.src = 'img/idoso.jpg'
            }else{
                //robo
                img.src = 'img/robo.jpg'
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 4){
                //bebe
                img.src='img/bebe.jpg'
            }else if(idade <= 15){
                //crianca
                img.src='img/crianca-fem.jpg'
            }else if(idade <= 23){
                //jovem
                img.src='img/jovem-fem.jpg'
            }else if(idade <= 60){
                //adulto
                img.src='img/adulto-fem.jpg'
            }else if(idade <= 125){
                //idosa
                img.src='img/idosa.jpg'
            }else{
                //robo
                img.src='img/robo.jpg'
            }
        }
        res.innerHTML = `Gênero <strong>${genero}</strong> com idade: <strong>${idade}</strong>`
    }
}