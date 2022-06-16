//select element fro the dom open, close and sidebarnav div 

let closeBtn = document.querySelector('.back');
let openBtn = document.querySelector('.next');
let imagen = document.querySelector('#imagen_perfil')
//let nombre = document.querySelector('.nombre')
//let texto = document.getElementById("texto_perfil").textContent(textop)
var images = 0
//document.getElementById("texto_perfil").textContent="halo";

// Add event listener to open icon 
openBtn.addEventListener('click', ()=>{
images += 1
if(images == -1){
  images = 3
}
if(images == 4){
  images = 0
}
if(images == 0){
  imagen.src ="./imagenes/Pablo.jpg";
  document.getElementById("nombre").textContent="Pablo Sierra";
  document.getElementById("texto_perfil1").textContent="Portavoz";
  document.getElementById("texto_perfil2").textContent="Se encarga de transmitir al resto de compañeros los acuerdos y el trabajo.";
  document.getElementById("texto_perfil3").textContent="Es el que entrega el proyecto, actividad o trabajo al profesorado.";
  document.getElementById("texto_perfil4").textContent="Colabora con el secretario para hacer efectiva y entendible la transmisión.";
  
}
if (images == 1){
  imagen.src ="./imagenes/Nico.jpg";
  document.getElementById("nombre").textContent="Cayetano Nicolas";
  document.getElementById("texto_perfil1").textContent="Secretario";
  document.getElementById("texto_perfil2").textContent="Rellena el seguimiento del grupo (Portafolios).";
  document.getElementById("texto_perfil3").textContent="Recuerda los compromisos de todo el equipo.";
  document.getElementById("texto_perfil4").textContent="Se encarga de los documentos aportados por el profesorado.";
}
if(images == 2){
  imagen.src ="./imagenes/Cristian.jpg";
  document.getElementById("nombre").textContent="Cristian Nievas";
  document.getElementById("texto_perfil1").textContent="Coordinador";
  document.getElementById("texto_perfil2").textContent="Anima a los miembros del equipo.";
  document.getElementById("texto_perfil3").textContent="Debe tener claro el trabajo que se pide.";
  document.getElementById("texto_perfil4").textContent="Procura que no se pierda el tiempo y que todo el grupo cumpla las normas de funcionamiento.";
}
if(images == 3){
  imagen.src ="./imagenes/Sergio.jpg";
  document.getElementById("nombre").textContent="Sergio Muñoz";
  document.getElementById("texto_perfil1").textContent="Coordinador";
  document.getElementById("texto_perfil2").textContent="Anima a los miembros del equipo.";
  document.getElementById("texto_perfil3").textContent="Debe tener claro el trabajo que se pide.";
  document.getElementById("texto_perfil4").textContent="Procura que no se pierda el tiempo y que todo el grupo cumpla las normas de funcionamiento.";
}

return
})

// Add event listener to close icon 
closeBtn.addEventListener('click', ()=>{
  images -= 1
  
if(images == -1){
  images = 3
}
if(images == 4){
  images = 0
}
  if(images == 0){
    imagen.src ="./imagenes/Pablo.jpg";
    document.getElementById("nombre").textContent="Pablo Sierra";
    document.getElementById("texto_perfil1").textContent="Portavoz";
    document.getElementById("texto_perfil2").textContent="Se encarga de transmitir al resto de compañeros los acuerdos y el trabajo.";
    document.getElementById("texto_perfil3").textContent="Es el que entrega el proyecto, actividad o trabajo al profesorado.";
    document.getElementById("texto_perfil4").textContent="Colabora con el secretario para hacer efectiva y entendible la transmisión.";
    
  }
  if (images == 1){
    imagen.src ="./imagenes/Nico.jpg";
    document.getElementById("nombre").textContent="Cayetano Nicolas";
    document.getElementById("texto_perfil1").textContent="Secretario";
    document.getElementById("texto_perfil2").textContent="Rellena el seguimiento del grupo (Portafolios).";
    document.getElementById("texto_perfil3").textContent="Recuerda los compromisos de todo el equipo.";
    document.getElementById("texto_perfil4").textContent="Se encarga de los documentos aportados por el profesorado.";
  }
  if(images == 2){
    imagen.src ="./imagenes/Cristian.jpg";
    document.getElementById("nombre").textContent="Cristian Nievas";
    document.getElementById("texto_perfil1").textContent="Coordinador";
    document.getElementById("texto_perfil2").textContent="Anima a los miembros del equipo.";
    document.getElementById("texto_perfil3").textContent="Debe tener claro el trabajo que se pide.";
    document.getElementById("texto_perfil4").textContent="Procura que no se pierda el tiempo y que todo el grupo cumpla las normas de funcionamiento.";
  }
  if(images == 3){
    imagen.src ="./imagenes/Sergio.jpg";
    document.getElementById("nombre").textContent="Sergio Muñoz";
    document.getElementById("texto_perfil1").textContent="Coordinador";
    document.getElementById("texto_perfil2").textContent="Anima a los miembros del equipo.";
    document.getElementById("texto_perfil3").textContent="Debe tener claro el trabajo que se pide.";
    document.getElementById("texto_perfil4").textContent="Procura que no se pierda el tiempo y que todo el grupo cumpla las normas de funcionamiento.";
  }
  return
})

//if(images == 3){
//
//}