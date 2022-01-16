let num = document.querySelector("input#txtn")
let res = document.querySelector('select#res')
let re = document.querySelector('div#re')
let t = document.querySelector('div#t')
let numero = []
let soma = 0
function adicionar(){
    t.innerHTML = ''
    re.innerHTML = ``
let n = Number(num.value)
    if(n < 1 || n > 100){
        alert("[ERR0] Digite um número de 1 a 100")
    }else if(-1 == numero.indexOf(n) ){
let item = document.createElement("option")
item.text = `Número ${n}`
item.value = `nume${n}`
res.appendChild(item)
numero.push(n)
}else{
    alert('[ERR0] Você já digitou esse número')
}
}
function finalizar(){
    numero.sort()
    if(numero.length == 0){
        alert("[ERR0] Adicione valores antes de finalizar")
    }else{
    for(let p = 0;p < numero.length;p++ ){
        soma += numero[p]
    }
    let s = soma / numero.length
    re.innerHTML = `Ao todo temos ${numero.length} Números adicionados<br>`
    re.innerHTML += `O maior Número é ${numero[numero.length - 1]}<br>`
    re.innerHTML += `O menor Número é ${numero[0]}<br>`
    re.innerHTML += `A soma de todos os Números é ${soma}<br>`
    re.innerHTML += `A média dos Números digitados é ${s.toFixed(1)}<br>`
    let ni = document.createElement("button")
    ni.textContent = 'Limpar'
    ni.value = 'Limpar'
    ni.addEventListener ('click', function(){
        res.innerHTML = ''
        re.innerHTML = ''
        t.innerHTML = ''
    })
  t.appendChild(ni)
}
}