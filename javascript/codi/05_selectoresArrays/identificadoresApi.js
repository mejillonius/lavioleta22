const ejecutar = () => {
  //document.getElementById("principal").onclick = adeu;
  //document.querySelector(".pepe2").onmouseover = saludo;
  //document.querySelector("#principal .pepe3, #p1").onclick = saludo;
  document.querySelector("#principal").onmouseout = color;
  /*   for (let i = 0; i < 8; i++) {
    document.querySelectorAll("p")[i].onclick = saludo;
    //document.getElementsByTagName("p")[i].onclick = adeu;
  } */
  document.querySelector("button").onmouseover = foco;
  document.querySelector("button").onkeyup = detectar_tecla;

  document.querySelectorAll("p").onclick = saludo;
  //document.getElementsByTagName("p").onclick = adeu;
};

const saludo = () => {
  alert("HOOOLA!!!");
};
const adeu = () => {
  alert("ADEUUU!!!!");
};
const foco = () => {
  document.querySelector("button").focus();
};
const detectar_tecla = (e) => {
  //  if (e.keyCode == 13) alert(`Has presionado la tecla "Enter"`);
  //  else alert(`no has clikado sobre "Enter"`);
  e.keyCode == 13
    ? alert(`Has presionado la tecla "Enter"`)
    : alert(`no has clikado sobre "Enter"`);
};
const color = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
  document.querySelector("#principal").style.color = "white";
};
window.addEventListener("DOMContentLoaded", ejecutar);
