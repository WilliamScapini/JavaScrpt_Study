let res = document.getElementById('res')
function adicionar(){
    let tx = document.querySelector("input#txt")
    let txt = String(tx.value)
    let tr = document.createElement("tr")
    res.appendChild(tr)
    tr.value = `${txt}`
    let check = document.createElement("input")
    check.type = "checkbox"
    tr.appendChild(check)
    let item = document.createElement("td")
    item.innerText = `${txt}`
    item.style = "text-align:left;"
    tr.appendChild(item)
    let apa = document.createElement("button")
    apa.textContent = "🗑️ "
    apa.style = "text-align: right;"
    apa.addEventListener("click", function deletar(){
        tr.remove(tr.value =`${txt}`)
    })
    tr.appendChild(apa)

}
