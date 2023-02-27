/* 

document.getElementById('entraNombre').onclick=function saludo() {
    const nom=document.getElementById('nombre').value;
    saludito.innerHTML=`Bienvenid@ ${nom}`;
    setTimeout(entraNumeroUno, 1000);
    function entraNumeroUno(){
        
        const primerNumero=`<div id="entraNumeros" >
        <p id="enunciado">Hola ${nom}. El juego consiste en lo siguiente: tendrás que indicarnos un número del 1 al 10 y después otro del 30 al 40. Entonces, la máquina seleccionará, de manera aleatoria, otro de rango comprendido entre las dos cifras que has designado. Tendrás 5 intentos para adivinarlo.</p>
        <p id="pideNumeroUno">Escribe un número entre el 1 y el 10:</p>
        <input type="text" id="primerNumero">
        <button id="entraNumeroUno">Continuar</button><span id="numeroUno"></span>
    </div>`;
    entrada.innerHTML=primerNumero;
    const numeroUno=document.getElementById('entraNumeroUno').onclick=recoge(primerNumero);
    console.log(numeroUno)
    
    function recoge(){
        const numeroUno=document.getElementById('primerNumero').value;
        //console.log(numeroUno);
    }
    setTimeout(entraNumeroDos, 1000);
    function entraNumeroDos(){
        pideNumeroUno.innerHTML='Escribe un número entre el 30 y el 40';
        primerNumero.innerHTML='';

    }
    

      }
} */

function adivinaConfirm(a) {
  if (confirm(`${a} Quieres volver a probar?`) == true) {
    muestraJuego.innerHTML='';
    miformulario2.classList.remove('d-none');
  } else {
    muestraJuego.innerHTML='';
    miformulario.classList.remove('d-none');
  }
 }
const miformulario = document.querySelector("#miformulario");
const miformulario2 = document.querySelector("#miformulario2");
const entradaUno=document.querySelector('#numUno');
const entradaDos=document.querySelector('#numDos');

const textFallo='Número máximo de intentos alcanzado!'
const textExito='Has ganado!';


miformulario.addEventListener("submit", (e) => {
    miformulario.classList.add('was-validated');
    e.preventDefault();
    e.stopPropagation();
    if (miformulario.checkValidity()) {
        const nom=document.querySelector('#nombre').value;
        miformulario.classList.remove('was-validated');
        miformulario.reset();
        //Abrir modal
        let myModal = new bootstrap.Modal(document.getElementById('mi_modal'));
        let texto_modal = `Bienvenid@ ${nom}!`;
        document.querySelector(".modal-body").innerHTML = texto_modal;
        myModal.show();
        //cambiar clases para mostrar/ocultar
        miformulario.classList.add('d-none');
        miformulario2.classList.remove("d-none");
    }
  }
);

miformulario2.addEventListener("submit", (e) => {
    let numUno=entradaUno.value;
    let numDos=entradaDos.value;

    miformulario2.classList.add('was-validated');
    e.preventDefault();
    e.stopPropagation();
    if (miformulario2.checkValidity()) {
        miformulario2.classList.remove('was-validated');
        miformulario2.reset();
        miformulario2.classList.add('d-none');
        let joc="";
    for(let i=numUno;i<=numDos;i++){
        joc+=`<input id="numero${i}" type="button" value="${i}"class="cuadros" >`;
        }muestraJuego.innerHTML=`<h3>Ahora debes adivinar el número comprendido entre el ${numUno} y el ${numDos}, tienes cinco intentos</h3><div class="numeros">${joc}</div><span id="intentos"></span>`;
    }
    const numAlea=Math.floor(Math.random()*(numDos-numUno+1)+numUno);
    console.log(numAlea);

    
    let contador=1
    document.querySelectorAll(".cuadros").forEach(elemento => {
        elemento.addEventListener("click", e => {
          const valor = parseInt(e.target.getAttribute("value"));
          const treuId=e.target.getAttribute("id");
          const numeroEscogido=document.getElementById(`${treuId}`);
          numeroEscogido.setAttribute('disabled',"");
          numeroEscogido.classList.remove('cuadros');
          numeroEscogido.classList.add('cuadros2');
          
          if(contador>5){
            adivinaConfirm(textFallo);       
          }else if(valor<numAlea){
            intentos.innerHTML=`Es mayor a ${valor}!<br>Intento ${contador}`;
            contador++;
          }else if(valor>numAlea){
            intentos.innerHTML=`Es menor a ${valor}!<br>Intento ${contador}`;
            contador++;
          }else{
            adivinaConfirm(textExito);
          }
        }
        );
      }
    );
  }
);





  
