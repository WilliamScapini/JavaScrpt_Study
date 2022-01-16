var idad =  document.querySelector("input#idade")
var i = Number(idad.value)
var sexo = document.getElementsByName("sexo")
var res = document.querySelector("div#res")
var img = document.querySelector("img#fot")
function verificar(){
   var i = Number(idad.value)
    if(i <= 0 || i >= 120 ){
     alert("[ERR0] você não inseriu os dados corretamente")
    }
    else if (sexo[0].checked){
        if(i < 14 ){
             res.innerHTML = `Você tem ${i} anos, você é uma criança!`
             img.src = "cm.png"
         }else if(i < 18 ){
             res.innerHTML = `Você tem ${i} anos, você é um adolecente!`
             img.src = "adm.png"
         }
          else if(i < 60 ){
            res.innerHTML = `Você tem ${i} anos, você é um homem adulto!`
            img.src = "am.png"
            }
         else{
            res.innerHTML = `Você tem ${i} anos, você é um homem idoso!`
             img.src = "im.png"
         }
    }
    else if (sexo[1].checked){
         if(i < 14 ){
             res.innerHTML = `Você tem ${i} anos, você é uma criança!`
            img.src = "cf.png"
        }
        else if(i < 18 ){
            res.innerHTML = `Você tem ${i} anos, você é um adolecente!`
            img.src = "adf.png"
         }
        else if(i < 60 ){
            res.innerHTML = `Você tem ${i} anos, você é uma mulher adulta!`
             img.src = "af.png"
        }
         else {
            res.innerHTML = `Você tem ${i} anos, você é uma mulher idosa!`
            img.src = "if.png"
        }
    }
   }

