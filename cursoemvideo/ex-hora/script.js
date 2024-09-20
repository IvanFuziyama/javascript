function Carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var titulo = document.getElementById('titulo')
    var rodape = document.getElementById('nome') 
    msg.innerHTML = `Agora são ${hora} horas` 
    
    if(hora >= 0 && hora < 12){
        //dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#faf9c1'
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#e4b04f'
    }else{  
        //noite
        img.src = 'img/noite.jpg'
        document.body.style.background = 'black'  
        titulo.style.color = 'white'
        rodape.style.color = 'white'
    }
}