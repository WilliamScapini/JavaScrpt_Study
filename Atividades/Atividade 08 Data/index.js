function hora(){
    const data = new Date()
    const d = data.getDay()
    const diaSem = diaS(d)
    const dia = data.getDate()
    const m = data.getMonth() 
    const month = mes(m)
    const h = data.getHours()
    const min = data.getMinutes()
    const res = document.getElementById('res')
    let di = dia < 10 ? "0" + dia : dia
    let hor = h < 10 ? "0" + h : h
    let mins = min < 10 ? "0" + min : min
    res.innerHTML = `<strong>${diaSem},${di} de ${month} de ${data.getFullYear()} <br> ${hor}:${mins}</strong><br>`
    setInterval(hora, 10000)
 }
function diaS(ds){
   switch(ds){
       case 0: 
       return "Domingo"
       case 1: 
       return "Segunda-Feira"
       case 2: 
       return "Terça-Feira"
       case 3: 
       return "Quarta-Feira"
       case 4: 
       return "Quinta-Feira"
       case 5: 
       return "Sexta-Feira"
       case 6: 
       return "Sábado"
       default : 
       return "Sábado"
   }
}
function  mes(ms){
    switch(ms){
        case 0 :
         return 'Janeiro'   
         case 1 :
         return 'Fevereiro'
         case 2 :
         return 'Março'
         case 3 :
         return 'Abril'
         case 4 :
         return 'Maio'
         case 5 :
         return 'Junho'
         case 6 :
         return 'Julho'
         case 7 :
         return 'Agosto'
         case 8 :
         return 'Setembro'
         case 9 :
         return 'Outubro'
         case 10 :
         return 'Novembro'
         case 11 :
         return 'Dezembro'
         
    }
}
