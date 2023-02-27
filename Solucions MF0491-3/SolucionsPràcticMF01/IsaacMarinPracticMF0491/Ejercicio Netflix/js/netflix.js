//DIV principal me ocupe toda pantalla
var altura = window.innerHeight;
document.getElementById('contenedorInicio').style.height=`${altura-150}px`;

//Dar estilo Hoover a enlaces y botones
var enlacesFooter = document.querySelectorAll('a.enlaceFooter');
var enlacesHeader = document.querySelectorAll('a.nav-link');

const hover1 = function(event1){
    this.style.color='red';
}

const fuera1 = function(event2){
    this.style.color='#adb5bd';
}

enlacesFooter.forEach((element) => {
    element.addEventListener('mouseover', hover1);
    element.addEventListener('mouseout', fuera1);
});

enlacesHeader.forEach((element) => {
    element.addEventListener('mouseover', hover1);
    element.addEventListener('mouseout', fuera1);
});


//Icono cruz y barras menú
const cambiaIcono = function(){
    if(document.getElementById('botonMenu').getAttribute('aria-expanded') === 'true') {
        document.getElementById('cerrar').style.display='';
        document.getElementById('barras').style.display='none';
    } else{
        document.getElementById('cerrar').style.display='none';
        document.getElementById('barras').style.display='';
    }
}

document.querySelector('#botonMenu').onclick=cambiaIcono;

