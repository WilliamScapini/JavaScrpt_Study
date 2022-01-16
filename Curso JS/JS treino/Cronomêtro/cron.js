let res = document.getElementById("visor")
let re = document.getElementById("res")
let btns = document.getElementById("btns")
let mseg = 0
let seg = 0
let min = 0
let hrs = 0
let t 
function iniciar() {
   t = setInterval(time,10) 
}
function parar() {
    clearInterval(t)
    let para = document.createElement('p')
    re.appendChild(para)
    let form = (hrs < 10 ? "0" + hrs : hrs)+":"+(min < 10 ? "0" + min : min)+":"+(seg < 10 ? "0" + seg : seg)+":" + (mseg < 10 ? "0" + mseg : mseg)
    para.innerHTML += `Você parou em ${form}<br>`

}
function limpar() {
    re.innerHTML = ""
}
function zerar() {
    clearInterval(t)
    seg = 0
    min = 0
    hrs = 0
    res.innerHTML = "00:00:00:00"
    re.innerHTML = ""

}
function time() {
    mseg++
    if(mseg == 60){
        mseg = 0 
        seg++
        if(seg == 60){
            seg = 0 
            min++
            if(min == 60){
                min = 0
                hrs++
            }
        }
    }
    
    let form = (hrs < 10 ? "0" + hrs : hrs)+":"+(min < 10 ? "0" + min : min)+":"+(seg < 10 ? "0" + seg : seg) + ":" + (mseg < 10 ? "0" + mseg : mseg)
    res.innerHTML = form
}