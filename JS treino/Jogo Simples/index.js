const nd = document.getElementById('nd')
const res = document.getElementById("res")
const re = document.getElementById("re")
let c = 0
function numer(){
    let al = Math.random() * (100 - 1) + 1
let aleatorio = Math.round((al))
return aleatorio
}
const b = numer()
function verify(){
    let num = Number(nd.value)
        if(num > b){
        res.innerHTML += 'Esse número é maior que o meu <br>'
        c++
    }else if( num < b){
        res.innerHTML += 'Esse número é menor que o meu <br>'
        c++
    }else if(num == b){
        res.innerHTML += 'Ganhou <br>'
        res.innerHTML += `Você tentou por ${c + 1} vezes <br>`
        c = 0
        let btn = document.createElement('input')
        btn.type = "button"
        btn.value = "reset"
        btn.addEventListener('click',function (){
            document.location.reload()
        })
        re.appendChild(btn)
    }
}