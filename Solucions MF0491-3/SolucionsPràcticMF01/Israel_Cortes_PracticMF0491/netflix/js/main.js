// Botón del Menú cambiar el icono de hamburguesa a X
const btn_menu = document.querySelector("#btn_menu");
const ico_hamburguesa = document.querySelector("#ico_hamburguesa");
const ico_cerrar = document.querySelector("#ico_cerrar");
btn_menu.addEventListener("click",()=>{
     if(btn_menu.classList.contains("collapsed"))
     {
            ico_hamburguesa.classList.remove('hide_content');
            ico_cerrar.classList.add('hide_content');
     }
     else{
            ico_hamburguesa.classList.add('hide_content');
            ico_cerrar.classList.remove('hide_content');
     }
});
// Carusel 
var myCarousel = document.querySelector('#slider_netflix');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 99999999999,
  wrap: false
});

// Botón de subir arriba
const btn_subir = document.querySelector("#btn_subir");
window.onscroll = () => {
      let altura_scroll = document.documentElement.scrollTop;
      if(altura_scroll > 115)
            btn_subir.classList.remove("hide_content");
      else
            btn_subir.classList.add("hide_content");
};
btn_subir.addEventListener("click",() =>{
      window.scrollTo({
            top:0, behavior:"smooth"
          });
});