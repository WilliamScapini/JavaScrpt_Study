let num1 = 10.5
let num2 = 20
let concat = num1.toString() + num2 // retorna 1020 pq transformou num1 temporariamente em string
// se quisermos transformar permanentemente em string usa se
//num1 = num1.string()
console.log(concat)
let binario = num2.toString(2)
console.log(binario)
console.log(num2.toFixed(2))//mostra o numero de casas decimais que vc quer 
console.log(Number.isInteger(num1))//retorna false pois 10.5 não é inteiro
let nan = num2 * 'olá'
console.log(Number.isNaN(nan))// retorna true pois nan é NaN pq não da para multiplicar palavras
let n1 = 0.7
let n2 = 0.2
console.log(n1 + n2)//mostra 0.8999... pq o js é impresiso para resolver multiplique por 100 e depois divida por 100 se vc usar tofixed ele arredonda pra cima , mas continua estando errado
//let resolucao = ((n1*100) + (n2*100))/100
let num = n1+n2
let resolucao = Number(num.toFixed(2)) // essa é a melhor forma de resolver esse problema
console.log(resolucao)