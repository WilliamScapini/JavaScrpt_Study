function random(){
  let r = Math.random() * 9 +1
  return Math.round(r)
}
let r = random()
function falar(){
   
   do {
    r = random()
    console.log(r)
   } while(r !== 10 );
}

falar()