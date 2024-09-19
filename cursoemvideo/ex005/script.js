var corpo = document.body
/*var p1 = window.document.getElementsByTagName('p')[0]
var p2 = window.document.getElementsByTagName('p')[1]
var d = window.document.getElementById('msg') funciona sem window também, é mais simplificado*/
var p1 = document.getElementsByTagName('p')[0]
var p2 = document.getElementsByTagName('p')[1]
var inome = document.getElementById('imsg')
var nome = document.getElementsByClassName('msg')[0]
var mensa = document.getElementsByName('mensage')[0]
var d = document.querySelector('div#ex')

document.write('Está escrito assim: '+p1.innerText+'<br>')
//window.document.write('Está escrito assim: '+p1.innerText+'<br>') funciona com window tambem
document.write(p2.innerHTML+'<br>') //puxou as configurações do html inteiro
document.write(p2.innerText) //puxou somente com as configurações do <p>

nome.innerText = "Hi!"
mensa.innerText= "Oláááá"
p1.style.color = 'blue'
inome.style.background = "green"
inome.innerText="Estou aguardando..."

d.style.color="blue"