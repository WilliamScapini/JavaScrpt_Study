const visor = document.querySelector('#visor')
const iniciar = document.querySelector('#iniciar')
const parar = document.querySelector('#parar')
const zerar = document.querySelector('#zerar')

document.addEventListener('keypress',function(e){
    if(e.code == 'Space'){
       if(c == 0){
           begin()
       }else{
           para()
       }
    }
})
iniciar.addEventListener('click',begin)
parar.addEventListener('click',para)
zerar.addEventListener('click',zeroin)
let t;
let c = 0
let ms = 0
let s = 0;
let m = 0;
let h = 0;
function begin(){
    visor.classList.remove('pause')
    clearInterval(t)
    c++
t = setInterval(time,100)
}

function zeroin(){
    visor.classList.remove('pause')
    clearInterval(t)
    visor.innerHTML = "00:00:00.0"
    ms = 0
    s = 0
    m = 0
    h = 0
    c--
}

function para(){
 clearInterval(t)
 c--
 visor.classList.add('pause')
}
function time(){
    ms++
    if(ms == 10){
        ms = 0
        s++
         if(s == 60){
        s = 0
       m++
       if(m == 60){
        m = 0
           h++
          
       }
   }
}
   let format = ((h < 10) ? "0" + `${h}`:h)+":"+((m < 10) ? '0'+`${m}`: m)+":"+((s < 10) ? '0'+`${s}` : s) + '.' + ms
   visor.innerHTML = format
}