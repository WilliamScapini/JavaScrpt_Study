function parimp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimp(133)
console.log(res)
function soma(n1 = 0 , n2 = 0){
    return n1 + n2
}

console.log(soma(3,6))
function fatorial(n){
    let fat = 1
    for(let c = n;c > 1;c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(3))

function fato(n){
    if(n == 1){
        return 1
    }else{
        return n * fato(n-1)
    }
}
console.log(fato(5))