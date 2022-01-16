// Operadores relacionais ou comparação
// a resposta sempre TRUE(certo) ou FALSE(errado)
5 > 2 // 5 > 2 é TRUE sinal de maior (lembre-se a flecha sempre aponta para o menor valor)
7 < 2 // é FALSE pois 7 é maior que 2
8 >= 8 // é TRUE, sinal de maior ou igual a 8
9 <= 7 // é FALSE pois 9 não menor que 7, nem igual a 7
5 == 5 // TRUE, esse é o simbolo de igual o = na verdade é recebe
4 != 4 // FALSE, esse é o simbolo de diferente ou não igual
10 === 10 /* TRUE, esse simbolo de identico, para ver se o 10 é um numero mesmo caso fosse
10 === "10" retornaria FALSE pois "10" é uma string*/
20 !== "20" // TRUE, esse simbolo é de não identico e como vimos acima "20" é uma string e 20 é um numero

//Operadores Lógicos
/*
    ! é negação como vimos acima, por exemplo quero um número que ! 4, se for qualquer número diferente de
    4 como 5,6,2,10,3 vai retornar TRUE, se for 4 vai retornar FALSE
    && é como se fosse de exigencia por exemplo me de um número de 1 a 5 && que não é primo 4 é TRUE 
    pois cumpre os 2 requisitos, 3 cumpre somente um requisiti por isso é FALSE, 8 tambem só antedeu 
    um requisito por isso é FALSE, e 9 não cumpre nenhum dos 2 então é FALSE
    || é e/ou por exemplo quero um número entre 3 e 6 || 9 e 12, vc me dá 4 e 200 é TRUE pois 1 já é o que 
    eu queria, 4 e 10 é TRUE e 2 e 13 é FALSE pois não antendeu nenhum dos requisitos Exemplo:
 */
var a = 2 
var b = 5
b > a && b/a == 2.5 // é true
b == a || b*2 == 10 // é true
b > a &&  b == a // é false
b == a || a > b // é false 

// operdores terarios ou triarios
/* 
    ? é se for TRUE ele faz uma ação e
    : é se for FALSE EXEMPLO 
*/ 
var média
média >= 7.0 ? alert("Aprovado") : alert ("reprovado")
/* 
    note que não dei um valor pra variavel média mas se eu der 9 vai dar TRUE e executará o alert("Aprovado")
    e se eu der 4 vai dar FALSE e executará o alert ("reprovado")
*/