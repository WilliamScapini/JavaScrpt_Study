function carregar(){
var agora = new Date()
var hor = agora.getHours()
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imag')
msg.innerHTML = `Agora são ${hor} horas<br>`
if(hor >= 6 && hor< 12){ 
    msg.innerHTML +=  'Bom Dia'
    img.src = "amanhecer.jpg"
    document.body.style.backgroundColor = '#F3e109'
}else if (hor >= 12 && hor < 18){
    msg.innerHTML +=  'Boa Tarde'
    img.src = "pordosol.jpg"
    document.body.style.backgroundColor = '#F59922'
}else{
    msg.innerHTML +=  'Boa Noite'
    img.src = "noite.jpg"
    document.body.style.backgroundColor = '#232733'
}
}