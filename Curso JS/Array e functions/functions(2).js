let raiz = n => n**0.5
console.log(raiz(9))
//Acima é uma arrow function que simplifica o codigo a seguir:
function ra(n){
    return n**0.5
} 
console.log(ra(16))
// ou
let rai = function(n){
    return n**0.5
};

console.log(rai(25))