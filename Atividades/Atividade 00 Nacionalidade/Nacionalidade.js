var pais = document.querySelector("input#txtp")
var res = document.querySelector('div#res')
function ver(){
    var p = String(pais.value)
var pa = p.toUpperCase()
if(pa == 'BRASIL'){
 res.innerHTML = "Você nasceu no Brasil, você é brasileiro nato!"
}else{
    res.innerHTML = "Você não nasceu no Brasil, por isso é estrangeiro<br>"
    res.innerHTML += "Mas você se naturalizou brasileiro?<br>"
    var input1 = document.createElement("input")
    input1.setAttribute('type','button')
    input1.setAttribute('value','sim')
    var input2 = document.createElement("input")
    input2.setAttribute('type','button')
    input2.setAttribute('value','não')
    res.appendChild(input1)
    res.appendChild(input2)
    input1.addEventListener("click", sim)
    input2.addEventListener("click", nao)
    function sim(){
        res.innerHTML += "<br>Então você é brasileiro sim, só que naturalizado!"
    }
    function nao(){
        res.innerHTML += `<br>Entendi você não é brasileiro nem nativo, pois nasceu em ${p}<br> e nem se naturalizado brasileiro!`
    }
}
}


/*<p>Você se naturalizou brasileiro?</p><br>
<input type="button" value="Sim" onclick="sim()"><input type="button" value="Não" onclick="nao()">
<script src="Nacionalidade.js"></script>*/