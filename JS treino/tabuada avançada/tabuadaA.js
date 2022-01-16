
function clicar(){
    var res = document.getElementById('res')
    var num = document.getElementById("txt1")
    var n = Number(num.value)
    for(var c = 0; c <= 10; c++){
        res.innerHTML += `<br>${n} x ${c} = ${n*c}`
    }
}