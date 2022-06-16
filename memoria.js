//select element fro the dom open, close and sidebarnav div 

//imagen 2
let closeBtn2 = document.querySelector('.back2');
let openBtn2 = document.querySelector('.next2');
let imagen2 = document.querySelector('#imag2');

//imagen 4
let closeBtn4 = document.querySelector('.back4');
let openBtn4 = document.querySelector('.next4');
let imagen4 = document.querySelector('#imag4');
//imagen 7
let closeBtn7 = document.querySelector('.back7');
let openBtn7 = document.querySelector('.next7');
let imagen7 = document.querySelector('#imag7');
//let nombre = document.querySelector('.nombre')
//let texto = document.getElementById("texto_perfil").textContent(textop)
var images2 = 0
var images4 = 0
var images7 = 0
//document.getElementById("texto_perfil").textContent="halo";

// Add event listener to open icon 
openBtn7.addEventListener('click', ()=>{
    images7 += 1
    if(images7 == 7){
        images7 = 0;
    }
    if(images7 == 0){
        imagen7.src="./imagenes/dia 7/20220609_194612.jpg";
    }
    if(images7 == 1){
        imagen7.src="./imagenes/dia 7/20220609_194746.jpg";
    }
    if(images7 == 2){
        imagen7.src="./imagenes/dia 7/20220609_194801.jpg";
    }
    if(images7 == 3){
        imagen7.src="./imagenes/dia 7/20220609_194803.jpg";
    }
    if(images7 == 4){
        imagen7.src="./imagenes/dia 7/20220609_194807.jpg";
    }
    if(images7 == 5){
        imagen7.src="./imagenes/dia 7/20220609_194859.jpg";
    }
    if(images7 == 6){
        imagen7.src="./imagenes/dia 7/20220609_194945.jpg";
    }
    
    if(images7 == -1){
        images = 6;
    }
return
})

// Add event listener to close icon 
closeBtn7.addEventListener('click', ()=>{
    images7 -= 1
    if(images7 == -1){
        images7 = 6;
    }
    if(images7 == 7){
        images7 = 0;
    }
    if(images7 == 0){
        imagen7.src="./imagenes/dia 7/20220609_194612.jpg";
    }
    if(images7 == 1){
        imagen7.src="./imagenes/dia 7/20220609_194746.jpg";
    }
    if(images7 == 2){
        imagen7.src="./imagenes/dia 7/20220609_194801.jpg";
    }
    if(images7 == 3){
        imagen7.src="./imagenes/dia 7/20220609_194803.jpg";
    }
    if(images7 == 4){
        imagen7.src="./imagenes/dia 7/20220609_194807.jpg";
    }
    if(images7 == 5){
        imagen7.src="./imagenes/dia 7/20220609_194859.jpg";
    }
    if(images7 == 6){
        imagen7.src="./imagenes/dia 7/20220609_194945.jpg";
    }
  return
})


openBtn4.addEventListener('click', ()=>{
    images4 += 1
    if(images4 == -1){
        images4 = 1;
    }
    if(images4 == 2){
        images4 = 0;
    }
    if(images4 == 0){
        imagen4.src="./imagenes/dia 4/tofirewall.png";
    }
    if(images4 == 1){
        imagen4.src="./imagenes/dia 4/firewall.png";
    }
    if(images4 == 2){
        imagen4.src="./imagenes/dia 7/20220609_194801.jpg";
    }
    if(images4 == 3){
        imagen4.src="./imagenes/dia 7/20220609_194803.jpg";
    }
    if(images4 == 4){
        imagen4.src="./imagenes/dia 7/20220609_194807.jpg";
    }
    if(images4 == 5){
        imagen4.src="./imagenes/dia 7/20220609_194859.jpg";
    }
    if(images4 == 6){
        imagen4.src="./imagenes/dia 7/20220609_194945.jpg";
    }
    
    if(images4 == -1){
        images4 = 6;
    }
return
})

// Add event listener to close icon 
closeBtn4.addEventListener('click', ()=>{
    images4 -= 1
    if(images4 == -1){
        images4 = 1;
    }
    if(images4 == 2){
        images4 = 0;
    }
    if(images4 == 0){
        imagen4.src="./imagenes/dia 4/tofirewall.png";
    }
    if(images4 == 1){
        imagen4.src="./imagenes/dia 4/firewall.png";
    }
    if(images4 == 2){
        imagen4.src="./imagenes/dia 7/20220609_194801.jpg";
    }
    if(images4 == 3){
        imagen4.src="./imagenes/dia 7/20220609_194803.jpg";
    }
    if(images4 == 4){
        imagen4.src="./imagenes/dia 7/20220609_194807.jpg";
    }
    if(images4 == 5){
        imagen4.src="./imagenes/dia 7/20220609_194859.jpg";
    }
    if(images4 == 6){
        imagen4.src="./imagenes/dia 7/20220609_194945.jpg";
    }
  return
})


//imagenes 2
openBtn2.addEventListener('click', ()=>{
    images2 += 1
    if(images2 == -1){
        images2 = 5;
    }
    if(images2 == 6){
        images2 = 0;
    }
    if(images2 == 0){
        imagen2.src="./imagenes/dia 2/general.jpg";
    }
    if(images2 == 1){
        imagen2.src="./imagenes/dia 2/preparando2.jpg";
    }
    if(images2 == 2){
        imagen2.src="./imagenes/dia 2/hembra.jpg";
    }
    if(images2 == 3){
        imagen2.src="./imagenes/dia 2/macho.jpg";
    }
    if(images2 == 4){
        imagen2.src="./imagenes/dia 2/puesto.jpg";
    }
    if(images2 == 5){
        imagen2.src="./imagenes/dia 2/20220328_171603.jpg";
    }
    
return
})

// Add event listener to close icon 
closeBtn2.addEventListener('click', ()=>{
    images2 -= 1
    if(images2 == -1){
        images2 = 5;
    }
    if(images2 == 6){
        images2 = 0;
    }
    if(images2 == 0){
        imagen2.src="./imagenes/dia 2/general.jpg";
    }
    if(images2 == 1){
        imagen2.src="./imagenes/dia 2/preparando2.jpg";
    }
    if(images2 == 2){
        imagen2.src="./imagenes/dia 2/hembra.jpg";
    }
    if(images2 == 3){
        imagen2.src="./imagenes/dia 2/macho.jpg";
    }
    if(images2 == 4){
        imagen2.src="./imagenes/dia 2/puesto.jpg";
    }
    if(images2 == 5){
        imagen2.src="./imagenes/dia 2/20220328_171603.jpg";
    }
    
  return
})










//if(images == 3){
//
//}