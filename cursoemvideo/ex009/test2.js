var time = new Date().getHours()
console.log(`Agora são exatamente ${time} horas`)
if(time < 6){
    console.log(`Boa Madrugada`)
}else if(time < 12){
    console.log(`Bom Dia`)
}else if(time < 18){
    console.log(`Boa tarde`)
}else if(time < 24){
    console.log(`Boa Noite`)
}else{
    console.log('Hora indefinido')
}