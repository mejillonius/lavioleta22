let cont = 0;
const bombilla1 = () => {
  if (cont % 2 == 0) {
    document.getElementById("bombilla").src = "imgs/apagada.gif";
  } else {
    document.getElementById("bombilla").src = "imgs/encendida.gif";
  }
  cont++;
};
const bombilla2 = () => {
  let bombilla = document.getElementById("bombilla");
  if (bombilla.src.match("apagada")) {
    bombilla.src = "imgs/encendida.gif";
  } else {
    bombilla.src = "imgs/apagada.gif";
  }
};
const bombilla3 = () => {
  let bombilla = document.getElementById("bombilla");
  if (bombilla.src.includes("apagada")) {
    bombilla.src = "imgs/encendida.gif";
  } else {
    bombilla.src = "imgs/apagada.gif";
  }
};
const button1 = document.querySelectorAll("button")[0];
const button2 = document.querySelectorAll("button")[1];
const button3 = document.querySelectorAll("button")[2];
button1.onclick = bombilla1;
button2.onclick = bombilla2;
button3.onclick = bombilla3;
