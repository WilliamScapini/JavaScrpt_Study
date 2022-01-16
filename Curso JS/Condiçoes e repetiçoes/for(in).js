const frutas = ['Abacate', 'Abacaxi', 'Acerola', 'Amora']
for(let i in frutas){
    console.log(`No indice ${i} tem a fruta ${frutas[i]}`)
}
const pessoa = {
    nome: "William",
    sobrenome: "Scapini",
    idade: 18
}

for(let i in pessoa){
    console.log(`${i}-${pessoa[i]}`)
}