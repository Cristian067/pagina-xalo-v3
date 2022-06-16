//select element fro the dom open, close and sidebarnav div 

let closeBtn = document.querySelector('.back');
let openBtn = document.querySelector('.paginanext');
let imagen = document.querySelector('#imagen_perfil')
//let nombre = document.querySelector('.nombre')
//let texto = document.getElementById("texto_perfil").textContent(textop)
var images = 0
//document.getElementById("texto_perfil").textContent="halo";

// Add event listener to open icon 
openBtn.addEventListener('click', ()=>{
openBtn.href="./qya.html";
return
})

// Add event listener to close icon 
closeBtn.addEventListener('click', ()=>{
  openBtn.href="./autoevaulacion.html";
  return
})

//if(images == 3){
//
//}