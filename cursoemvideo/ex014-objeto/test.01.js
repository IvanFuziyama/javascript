let amigo = {nome:'José', 
    sexo: 'M', 
    peso: 82.5,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }}
amigo.engordar(2)//adicionou 2kg
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)