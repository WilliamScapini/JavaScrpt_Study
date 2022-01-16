function gerar(){
    let numero = document.getElementById("txtn")
    let re = document.getElementById("res")
    if(numero.value.length == 0){
        alert("[ERR0] insira os dados corretamente")
    }else{
        let n = Number(numero.value)
        re.innerHTML = ''
    for(let c = 0; c <= 10; c++){
    let item = document.createElement("option")
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    re.appendChild(item)
   }
}
}