var d = document.querySelector('div#box')
var tx1 = document.querySelector('input#txt1')
function clicar(){
 var n1 = Number(tx1.value)
 d.innerHTML += `<strong>${n1} X 1 = ${n1*1}<strong>`
 d.innerHTML += `<br><strong>${n1} X 2 = ${n1*2}<strong>`
 d.innerHTML += `<br><strong>${n1} X 3 = ${n1*3}<strong>`
 d.innerHTML += `<br><strong>${n1} X 4 = ${n1*4}<strong>`
 d.innerHTML += `<br><strong>${n1} X 5 = ${n1*5}<strong>`
 d.innerHTML += `<br><strong>${n1} X 6 = ${n1*6}<strong>`
 d.innerHTML += `<br><strong>${n1} X 7 = ${n1*7}<strong>`
 d.innerHTML += `<br><strong>${n1} X 8 = ${n1*8}<strong>`
 d.innerHTML += `<br><strong>${n1} X 9 = ${n1*9}<strong>`
 d.innerHTML += `<br><strong>${n1} X 10 = ${n1*10}<strong><br>`
 d.innerHTML += "----------"
}