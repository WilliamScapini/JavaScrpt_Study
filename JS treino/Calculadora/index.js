let res = document.getElementById("res")

function inset(num){
    res.innerHTML += num
}

function limpar(){
    res.innerHTML = ''
}
function back(){
    let resultado =  document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML =  resultado.substring(0,resultado.length -1)
}
function calcular(){
    let resultado =  document.getElementById('res').innerHTML
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }else{
        alert("[ERR0] digite os dados corretamente para obter um resultado")
    }
    
    
    
    /*let resultado =  document.getElementById('res').innerHTML
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }else{
        alert("[ERR0] digite os dados corretamente para obter um resultado")
    }*/
}