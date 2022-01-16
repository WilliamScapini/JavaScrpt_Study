const pes = document.getElementById("txt1")
const alt = document.getElementById("txt2")
const res = document.getElementById('res') 
function calc(){
    if(pes.value == "" || alt.value == ''){
        alert('[ERRO] Digite os dados para efetuar o calculo')
    }else{
        calcular()
    }
}
function calcular(){
    res.innerHTML = ''
  let calculo = calculando()
    res.innerHTML = `Seu IMC é ${calculo}<br>`
    verificar(calculo)
}
function calculando(){
    let peso = Number(pes.value)
    let altura = Number(alt.value)
    let calc = peso/(altura*altura)
    let calculor = calc.toFixed(2)
    return calculor
}
function verificar(calculo){
    if(calculo <= 18.5){
        res.innerHTML += `Você Está abaixo do peso`
    }else if(calculo <= 24.99){
        res.innerHTML += `Você Está no peso normal`
    }else if(calculo <= 29.99){
        res.innerHTML += `Você Está com sobrepeso`
    }else if(calculo <= 34.99){
        res.innerHTML += `Você Está com obesidade de grau 1`
    }else if(calculo <= 39.99){
        res.innerHTML += `Você Está com obesidade de grau 2`
    }else if(calculo >= 40){
        res.innerHTML += `Você Está com obesidade de grau 3`
    }
}