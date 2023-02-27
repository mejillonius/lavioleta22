// Función que devuelve un numero aleatorio entre dos valores
const numeroAleatorio = (min=1,max=10) => {
      return Math.round(Math.random() * (max - min) + min);
};

// Función para mostrar modales
const muestraModal = (id_modal = "#mi_modal",titular_modal = "Titular Modal", clase_modal = "bg-success", mensaje_modal = "Mensaje del Modal") =>{

      let myModal = new bootstrap.Modal(document.querySelector(id_modal));

      document.querySelector(".modal-body").innerHTML = mensaje_modal;
      document.querySelector("#titular_info_modal").innerHTML = titular_modal;
      document.querySelector("#header_modal").className = "modal-header";
      document.querySelector("#header_modal").classList.add(clase_modal);
      myModal.show();

};

// Función para hacer Scroll a un elemento de la página
const ScrollToElement = (elemento) => {
      if(elemento == "#totop"){
            window.scrollTo(0,0);
      }
      else{
            document.querySelector(elemento).scrollIntoView({
                  behavior: 'smooth'
            });
      }   
};

// Recoger todos los botones con la clase Scrollto para darle la funcionalidad
const botones_con_scroll = document.querySelectorAll(".scrollto");
botones_con_scroll.forEach((el) =>{
      el.addEventListener("click", ()=> {
            zona_scroll = el.attributes.href.value;
            ScrollToElement(zona_scroll);          
      });
});

// Botón de accesibilidad
const btn_accesibilidad = document.querySelector("#btn_accesibilidad");
const body = document.querySelector("body");

// Comprobar si antes se ha activado la accesibilidad en la página
let accesibilidad_web = false;
if(localStorage.getItem('accesibilidad_web')){
      accesibilidad_web = localStorage.getItem('accesibilidad_web');
}

if(accesibilidad_web == "true"){
      body.classList.add("accesibilidad");
}

btn_accesibilidad.addEventListener("click",()=>{
      body.classList.toggle("accesibilidad");
      if(body.classList.contains('accesibilidad')){
            localStorage.setItem("accesibilidad_web",true);
      }
      else{
            localStorage.setItem("accesibilidad_web",false);
      }
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

/* 
Ejercicio 1
 Crea un html vinculat al framework Bootstrap, amb dos botons inicials. Un per mostrar els 5 botons principals dels components de bootstrap, L’altre ver borrar els botons. Cadascu dels 5 botons ha de tenir el format, la class i comportament dels botons natius del framework: Primary, Secondary, Success, Danger i Warning. Cada botó tindrà una acció vinculada  que quedarà delegada fins que no es canviï el fons del document al color principal de cada bodó (preventDefault());
*/
const botones_cambia_colores = document.querySelectorAll(".cambia_color_fondo");
botones_cambia_colores.forEach((Element) => {
      Element.addEventListener("click", (e)=> {
            let color_de_bg = Element.attributes.fondo.value;
            body.className = "";
            body.classList.add(color_de_bg);    
            while(body.className != color_de_bg)
                  e.preventDefault();              
      });
});

/* 
Ejercicio 2
 maqueta el formato i javascript necessari per veure un joc per adivinar un número pensat per l’ordinador en 5 intents . Segueix el model del video adjunt Pots fer servir un framework de client o fer el Css propi
*/

const formulario_nombre_jugador = document.querySelector("#formulario_nombre_jugador");
const formulario_numeros_juego = document.querySelector("#formulario_numeros_juego");

// Recoger o Inicializar listado de jugadores del Localstorage
let jugadores = [];
if(localStorage.getItem('jugadores')){
      jugadores = localStorage.getItem('jugadores');
      jugadores = JSON.parse(jugadores);
}

// Si hay jugadores anteriores mostrar botón de mostrar jugadores
const btn_listado_jugadores = document.querySelector("#btn_listado_jugadores");
const listado_jugadores = document.querySelector("#listado_jugadores");
btn_listado_jugadores.addEventListener("click", ()=> {
      let salida_html = "";
      jugadores.forEach((Element, index) => {
            console.info(Element);
            clase_tarjeta_jugador = "bg-danger";
            if(Element.acabado == true)
                  clase_tarjeta_jugador = "bg-success";

            salida_html += `<div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="card mb-2 ${clase_tarjeta_jugador}" tabindex="0">
                                          <div class="card-header">
                                                Jugador Nº: ${index+1}
                                          </div>
                                          <div class="card-body">
                                                <h5 class="card-title">
                                                      Nombre: ${Element.nombre}  <br>
                                                </h5>
                                                <p class="card-text">
                                                      <span class="fw-bold"> Nº de Intentos: </span> ${Element.n_jugadas} <br>
                                                </p>
                                          
                                          </div>
                              </div></div>`;
      });

      listado_jugadores.innerHTML = salida_html;           
});

if(jugadores.length > 0){
      btn_listado_jugadores.classList.remove("hide_content");
}

console.info(jugadores);

let nombre_jugador_actual = "";
let numero_a_acertar = 0;
let contador_jugadas = 0;
console.log(`Número a acertar ${numero_a_acertar}`);

// Formulario para el Nombre del Jugador
formulario_nombre_jugador.addEventListener("submit", (e) => {

      formulario_nombre_jugador.classList.add('was-validated');
      e.preventDefault();
      e.stopPropagation();
      if (formulario_nombre_jugador.checkValidity()) {
            nombre_jugador_actual = formulario_nombre_jugador.nombre_jugador.value;
            console.log(nombre_jugador_actual);

            formulario_nombre_jugador.classList.remove('was-validated');
            formulario_nombre_jugador.reset();

            formulario_nombre_jugador.classList.add("hide_content");
            formulario_numeros_juego.classList.remove("hide_content");

            muestraModal("#mi_modal","Información","bg-success",`Bienvenido ${nombre_jugador_actual}`);
           
      }
});

// Función para montar el juego en el HTML
const montaJuegoHtml = (div_zona_juego,numero_min,numero_max) => {
      numero_a_acertar = numeroAleatorio(numero_min,numero_max);
      console.log(`Número a acertar ${numero_a_acertar}`);
      let salida_html = `<div class="col text-center">`;

      for(let x = numero_min; x <= numero_max;x++){
            salida_html += `<button tabindex="0" class="btn btn_juego">${x}</button>`;
      }                        

      salida_html += `</div>`;
      div_zona_juego.innerHTML = salida_html;
      
      let botones_del_juego = document.querySelectorAll(".btn_juego");

      botones_del_juego.forEach((Element) => {
            Element.addEventListener("click", ()=> {
                  contador_jugadas++;
                  let minumero = parseInt(Element.innerHTML);
                  let mensaje = "";
                  let titular_modal = "";
                  let clase_modal = "bg-danger";
                  let acierto = false;

                  if(numero_a_acertar < minumero){
                        mensaje = "El número que tienes que acertar es inferior al elegido";
                        titular_modal = "Uppsss";
                        clase_modal = "bg-danger";
                  }
                  else if(numero_a_acertar > minumero){
                        mensaje = "El número que tienes que acertar es superior al elegido";
                        titular_modal = "Uppsss";  
                        clase_modal = "bg-danger";     
                  }
                  else{
                        mensaje = "Has acertado el número!"; 
                        titular_modal = "Ole!!";
                        clase_modal = "bg-success";
                        acierto = true;
                  }

                  if(contador_jugadas == 5 && acierto == false){
                        mensaje = `Ohhhh no has acertado el número!! El numero era: ${numero_a_acertar}`;
                        zona_de_juego.classList.toggle("hide_content");
                        formulario_nombre_jugador.classList.toggle("hide_content");
                  }

                  if(acierto == true){
                        zona_de_juego.classList.toggle("hide_content");
                        formulario_nombre_jugador.classList.toggle("hide_content"); 
                  }
                  else{
                        Element.disabled = true;
                  }

                  // Crear en el LocalStorage el marcador de jugadores
                  if(acierto ==  true || contador_jugadas == 5){
                        let jugador = {
                              "nombre" : nombre_jugador_actual,
                              "n_jugadas" : contador_jugadas,
                              "acabado" : acierto
                        }
                        jugadores.push(jugador);
                        console.log(jugadores);
                        localStorage.setItem("jugadores",JSON.stringify(jugadores));

                        if(btn_listado_jugadores.classList.contains("hide_content")){
                              btn_listado_jugadores.classList.remove("hide_content");
                        }
                  }

                  muestraModal("#mi_modal",titular_modal,clase_modal,`Nº de Intento: ${contador_jugadas} -- `+mensaje);
                                           
            });
      });
};

// Formulario para los Números
let numero_min = 0;
let numero_max = 0;
const zona_de_juego = document.querySelector("#zona_de_juego");
formulario_numeros_juego.addEventListener("submit", (e) => {

      formulario_numeros_juego.classList.add('was-validated');
      e.preventDefault();
      e.stopPropagation();
      if (formulario_numeros_juego.checkValidity()) {
            numero_min = formulario_numeros_juego.numero_min.value;
            numero_max = formulario_numeros_juego.numero_max.value;
            console.log(numero_min);
            console.log(numero_max);

            formulario_numeros_juego.classList.remove('was-validated');
            formulario_numeros_juego.reset();

            formulario_numeros_juego.classList.add("hide_content");
            zona_de_juego.classList.remove("hide_content");

            contador_jugadas = 0;
            montaJuegoHtml(zona_de_juego,numero_min,numero_max);

      }
});

