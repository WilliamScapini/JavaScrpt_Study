let n = [3,5,2,54,645,-14]
n.unshift(1)//adiciona 1 no começo do array movendo todos os outros para a proxima key
console.log(n)
let remove = n.pop(n[2])//remove o ultimo item do array no caso aqui o -14 e salva o valor em remove
console.log(n)
console.log(remove)
n.shift()//remove o primeiro item do array no caso aqui o 1 e salva o valor em rem
console.log(n)// e .shift()tambem altera todos os dados do array pra tras fazendo com que 3 fique na key 0
console.log(n[0])
delete n[1]//deleta o 5 na key 2 e deixa o item vazio(undefined)
console.log(n)
n[1]= 12
console.log(n.slice(0, 3))// pega os 3 primeiros items
console.log(n.slice(0, -2))//pega todos elementos menos os 2 ultimos