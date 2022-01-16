var inicio = document.querySelector("input#txtn1")
var fim = document.querySelector("input#txtn2")
var passo =  document.querySelector("input#txtn3")
var res =  document.querySelector("div#res")
function contar(){
    res.innerHTML = "contando:<br>"
  var ini = Number(inicio.value)
  var fi = Number(fim.value)
  var pas = Number(passo.value)
  if(passo.value == 0 ||fim.value == 0 || inicio.value == 0  ){
    alert('[ERR0] insira os dados corretamente')
  }else if(fi > ini){
  do{
    res.innerHTML += `${ini} &rarr; `
    ini = ini + pas
  }while(ini <= fi)
  res.innerHTML += "Fim"
}else if(fi < ini){
  do{
    res.innerHTML += `${ini} &rarr; `
    ini = ini - pas
  }while(ini >= fi)
  res.innerHTML += "Inicio"
}
}//a