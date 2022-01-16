let altura = document.querySelector('input#txtn1')
let peso = document.querySelector('input#txtn')
let res = document.getElementById('res')
function calcular(){
    if(peso.value == 0 ||altura.value == 0){
        alert('[ERR0]Digite os dados corretamente para calcular')
    }else{
        let pes = Number(peso.value)
    let alt = Number(altura.value)
    let num = (alt/100)**2
    let n = pes/num
   res.innerHTML += `Seu I.M.C. é ${n.toFixed(2)}`
   let img = document.createElement('img')
   img.src = 'imc.jpg'
   res.appendChild(img)
}

}
function reset(){
    res.innerHTML = ``
    peso.value = ''
    altura.value = ''
}