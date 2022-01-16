function retornaHora(){
    const data = new Date()
    return data.toLocaleTimeString('pt-BR', {hour12: false})
    }

const timer = setInterval(function(){
    console.log(retornaHora());
},1000)

setTimeout(function(){
    clearInterval(timer)
},5000)

setTimeout(function(){
    console.log('Hello Word!')
},5500)