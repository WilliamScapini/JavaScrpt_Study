const dat = document.getElementById('date')//year - month - day
const nomed = document.getElementById('nome')
const alturad = document.querySelector('input#altura')
const pesod = document.querySelector('input#peso')
const res = document.getElementById('res')
const sel = document.getElementById("dados")
const btn = document.getElementById("btn")


let contador = 0
let arr = []

function add(){
    let nome1 = String(nomed.value)
     if(nome1.length == 0 || dat.value == "" || alturad.value == "" || pesod.value == ""){
    alert("[ERRO] digite os dados corretamente")
    
}else{ ad()
}
}
function ad(){ 
    const c  = contador
   arr.push(criarobjeto())

    let tr = document.createElement('tr')
    tr.value = `t${contador}`
    sel.appendChild(tr)

    let item = document.createElement('td')
    item.innerText = `Nome:${arr[contador].nome} Idade:${arr[contador].idade} Altura:${arr[contador].altura} Peso:${arr[contador].peso}`
    tr.appendChild(item)

    let apa = document.createElement("button")
    apa.textContent = "\uD83D\uDDD1"
    apa.style = "text-align: right;"
    apa.addEventListener("click", function deletar(){
        tr.remove(tr.value =`t${contador}`)
        delete arr[c]
        arr[c] = 'del'
    })
    tr.appendChild(apa)

    contador++
}
function calcular(){

    let date1 = new Date();
    let ano = date1.getFullYear()
    let mes = date1.getMonth()
    let dia = date1.getDate()

    let string = dat.value
    let separate = string.split("-")

    let anop = Number(separate[0])
    let mesp = Number(separate[1])
    let diap = Number(separate[2])

    let contaDia = diap - dia 
    let contaMes = mesp - mes
    let contaAno = ano -anop

    if(contaMes >= 0){
        if(contaDia > 0){
            contaAno--
            return contaAno
        }else{
            return contaAno
        }
    }else{
        return contaAno
    }
}
function criarobjeto(){
    let nome = nomed.value
    let idade = calcular()
    let altura = Number(alturad.value) 
    let peso = Number(pesod.value)

    return {nome, idade, altura, peso}
}
