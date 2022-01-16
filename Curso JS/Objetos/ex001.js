/*
Objeto nada mais é do que um array onde você pode alterar os indices ou keys
exemplo:
*/
let amigo = {
    nome: 'José',//Aqui 'José é uma string e para acessar esse elemento você não
    // usa a key 0 mas sim a key nome
    sexo: 'masculino',
    peso: 85.4,
    engordar(p){
        console.log('egordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)