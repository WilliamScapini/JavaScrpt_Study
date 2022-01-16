let num = [3,6,7,8]
num[4]= 2//coloca o numero 2 na posição 4 começando do 0
num.push(5)// coloca um valor o final da arrat no caso aqui o numero 5  na key 5(que a vdd é 6)
console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho ddo nosso vetor é ${num.length}`)//mostra quantos elementos a array num tem
console.log(`Nosso vetor de forma crescente é ${num.sort()}`)// organiza a array de forma crescente
console.log(`Nosso vetor é o ${num[3]}`)// mostra o nuumero que esta na posição 3 começando do 0
for(let pos = 0; pos < num.length; pos++){
    console.log(`O número na casa ${pos} é ${num[pos]}`)
}
num.sort((a, b) => b - a)// deixa de forma decrescente
for(let pos in num){
    console.log(`O número na casa ${pos} é ${num[pos]}`)
}// simplifica o codigo for para arrays
console.log(`Nosso vetor é o ${num.indexOf(9)}`)/*procura o valor 7 na array e 
retorna a key desse valor no caso o 7 fica na key 1 depois de organizar de forma decrescente*/
