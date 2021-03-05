var hamburger = document.querySelector(".nav-toggle");
var body = document.body;
var page = document.documentElement;

function doToggle(){
   body .classList.toggle('menu-open');
   page .classList.toggle('noscroll');
}
hamburger .addEventListener('click',doToggle);


window.onload = () => {
   window.addEventListener("scroll", () => {
       let hauteur = document.documentElement.scrollHeight - window.innerHeight

       let position = window.scrollY

       let largeur = document.documentElement.clientWidth

       let barre = position / hauteur * largeur

       document.getElementById("progress").style.width = barre+"px"
   })
}

AOS.init({
   duration: 1200,
 })



 





