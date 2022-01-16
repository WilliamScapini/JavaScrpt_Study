let res = document.getElementById("hora")
let re = document.querySelector("div#data")
let = t
function hora() {
let dat = new Date()
let hrs = dat.getHours()
let min = dat.getMinutes()
let seg = dat.getSeconds()
let date = new Date()
let y = date.getUTCFullYear()
let m = date.getMonth()
let d = date.getDate()
switch(m){
    case 0 : 
    m = "janeiro"
    break
    case 1 : 
    m = "fevereiro"
    break
    case 2 : 
    m = "março"
    break
    case 3 : 
    m = "abril"
    break
    case 4 : 
    m = "maio"
    break
    case 5 : 
    m = "junho"
    break
    case 6 : 
    m = "julho"
    break
    case 7 : 
    m = "agosto"
    break
    case 8 : 
    m = "setembro"
    break
    case 9 : 
    m = "outubro"
    break
    case 10 : 
    m = "novembro"
    break
    case 11 : 
    m = "dezembro"
    break
}
re.innerHTML = `${d} de ${m} de ${y}`
let form = (hrs < 10 ? "0" + hrs : hrs)+":"+(min < 10 ? "0" + min : min)+":"+(seg < 10 ? "0" + seg : seg)
res.innerHTML = form
t=setInterval(hora,1000)
}