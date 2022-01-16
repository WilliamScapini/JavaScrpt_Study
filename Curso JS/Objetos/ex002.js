function criarObj(nome, idade,vacina){
    return{nome,idade,vacina, apre(){
        console.log(`Olá! eu sou ${this.nome} tenho ${this.idade} anos e tomei a vacina ${this.vacina}`)
    }}
}
const pessoa1 = criarObj('william',18,'pfizer')
const pessoa2 = criarObj('mario', 42, 'coronavac')
const pessoa3 = criarObj('jonatas', 28 , 'Jansen')
const pessoa4 = criarObj('gabriela',29,'astrazenica')

console.log(pessoa4)
pessoa3.apre()