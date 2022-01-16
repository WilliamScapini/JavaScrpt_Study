let n1 = 9.316935
console.log(Math.floor(n1))// arredonda pra baixo pro 'floor'
console.log(Math.ceil(n1))// arredonda pra cima pro 'ceil'(teto)
console.log(Math.round(n1))/* arredonda pro numero interiro mais proximo no caso aqui pra baixo pois
9.3 esta mais perto de 9 do que de 10 e se for 9.5 ele arredonda pra cima
*/
console.log(Math.max(1,3,2,100,-29,24,48,-256,-68,97))// retorna o maior numero da sequecia
console.log(Math.min(1,3,2,100,-29,24,48,-256,-68,97))// retorna o menor numero da sequecia
console.log(Math.random())// retorna um numero aleatorio entre 0 e 1
let al = Math.random() * (100 - 1) + 1 // aqui diz que tem que mostrar um numero entre 1 e 100
let aleatorio = Math.round((al))// aqui arrendoda o numero já que é mais facil sair um numero com casa decimal
console.log(aleatorio)
let pi = Math.PI// mostra o valor de pi
console.log(pi.toFixed(2))
console.log(10/0)// dá infinity e se usar typeof da verdadeiro toma cuidado com isso