let barra = document.querySelector(".barra-lateral");
let barraBtn = document.querySelector(".barra-lateralBtn");
barraBtn.onclick = function() {
  barra.classList.toggle("active");
  if(barra.classList.contains("active")){
  barraBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  barraBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}