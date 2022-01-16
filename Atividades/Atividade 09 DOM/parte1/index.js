 const cont = document.querySelector('#container') 
const elementos = [
    {tag: 'p', texto: 'frase 1', cor: 'red'},
    {tag: 'div', texto: 'frase 2',cor: 'violet'},
    {tag: 'h2', texto: 'frase 3',cor: 'darkcyan'},
    {tag: 'section', texto: 'frase 4',cor: 'blue'},
]

/* for(let i = 0; i < elementos.length; i++){
    let item = document.createElement(`${elementos[i].tag}`)
    item.innerHTML = `${elementos[i].texto}`
    item.style = `background-color: ${elementos[i].cor};`
    cont.appendChild(item)
} */
for(let i = 0; i < elementos.length; i++){
    let {tag, texto, cor } = elementos[i];
    console.log(tag);
    let item = document.createElement(tag);
    item.innerText = texto;
    item.style = `background-color: ${cor};`
    cont.appendChild(item)
}