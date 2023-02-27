const btncontrast = document.querySelector("#contrast");

const contrast = () => {
  const consta = document.querySelector("body");
  const small = document.querySelector("small");
  consta.classList.toggle("contraste");
  small.classList.toggle("peque");
};

btncontrast.onclick = contrast;
const getFontSize = () =>
  parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--font-size")
  );

const fontUp = (element) => {
  element.addEventListener("click", () => {
    let fontSize = getFontSize();
    document.documentElement.style.setProperty(
      "--font-size",
      `${fontSize * 1.1}`
    );
  });
};

const fontDown = (element) => {
  element.addEventListener("click", () => {
    let fontSize = getFontSize();
    document.documentElement.style.setProperty(
      "--font-size",
      `${fontSize * 0.9}`
    );
  });
};

addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") document.getElementById("font-up").click();
  if (e.key === "ArrowDown") document.getElementById("font-down").click();
});

fontUp(document.getElementById("font-up"));
fontDown(document.getElementById("font-down"));

let n,
  bienvenida,
  saludo,
  min,
  max,
  cont = 1,
  rand,
  hipotesis,
  error,
  result = 0;

// Selecciones por query*********************
const nombre = document.querySelector("#nombre");
const enunciado = document.getElementById("enunciado");
const paso1 = document.querySelector("#paso1");
const paso2 = document.querySelector("#paso2");
const paso3 = document.querySelector("#juegoBtns");
const num1In = document.querySelector("#numMin");
const num1Div = document.querySelector("#num1");
const num2In = document.querySelector("#numMax");
const num2Div = document.querySelector("#num2");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error4 = document.querySelector("#error4");
const continuar1Btn = document.querySelector("#continuar1");
const continuar2Btn = document.querySelector("#continuar2");
const continuar3Btn = document.querySelector("#continuar3");
const reiniciarBtn = document.querySelector("#reset");
const resetQ = document.querySelector("#deNuevo");
const noo = document.querySelector("#no");
document.querySelector("#juegoBtns").classList.remove("oculto");
// Bienvenido y ?Nombre*******************************
nombre.value = sessionStorage.getItem("nombre");

function bienvenidoNombre() {
  n = nombre.value;
  sessionStorage.setItem("nombre", n);
  n = n.replace(/\s/g, "");
  if (Number(n) || n == "") {
    error =
      "Nombre no válido, vuelve a probar teniendo en cuenta que no puedes introducir carácteres numéricos.";
    error1.innerHTML = error;
    error1.style.color = "red";
  } else {
    error1.innerHTML = `Bienvenid@ ${n}.`;
    error1.style.color = "orange";
    setTimeout(muestraJuego(), 1000);
  }
}
// Explica el juego y da la bienvenida a nombre********************
function muestraJuego() {
  paso1.classList.add("oculto");
  paso2.classList.remove("oculto");
  let parrafo = `Bienvenid@ ${n}.
		El juego consiste en lo siguiente: tendrás que indicarnos un número del 1 al 10 ydespués otro del 30 al 40.Entonces, la máquina seleccionará, de manera aleatoria, otro dentro del rango comprendido entre las dos cifras que hasdesignado. Tendrás 5 intentos para adivinarlo. `;
  enunciado.innerHTML = parrafo;
}

// Checar numero minimo del rango************************
function checkMin() {
  min = num1In.value;
  min = Number(min.replace(/ /g, ""));
  if (!Number(min >= 1 && min <= 10) || min == "") {
    error = `Lo sentimos. Has introducido un dato no válido.`;
    error2.style.color = "red";
    error2.innerHTML = error;
    return false;
  } else {
    error = `Tu primer número es el ${min}.`;
    error2.style.color = "orange";
    error2.innerHTML = error;
    num2Div.classList.remove("oculto");
    return true;
  }
}
// checar el numero maximo del rango**************************
function checkMax() {
  max = num2In.value;
  max = Number(max.replace(/ /g, ""));
  if (!Number(max >= 30 && max <= 40) || max == "") {
    error = `Lo sentimos. Has introducido un dato no válido.`;
    error3.innerHTML = error;
    error3.style.color = "red";
    return false;
  } else {
    error = `Tu segundo número es el ${max}.`;
    error3.innerHTML = error;
    error3.style.color = "orange";
    setTimeout(() => {
      paso2.innerHTML = `${n}, tus números son el ${min} y el ${max}. Adivina el número dentro de ese rango que ha pensado la máquina de manera aleatoria. Este es tu intento  ${cont} de 5.`;
      let boton = "";
      boton += `<div class="w3-container w3-section centro">`;
      for (let i = min; i <= max; i++) {
        boton += `<button id="btn${i}" class="w3-button w3-teal minmar" onclick="jugar(${i}); usedBtn(${i})">${i}</button>`;
        if (i % 10 == 0) boton += `<br/>`;
      }
      //   calcular aleatorio****************************
      rand = Math.floor(Math.random() * (max + 1 - min)) + min;
      console.log(`aleatorio ${rand}`);
      boton += "</div>";
      paso3.innerHTML = boton;
    }, 1500);
    return true;
  }
}
// botones -> adivinar -> bien/mal ******************
function jugar(hipotesis) {
  if (cont <= 5) {
    if (hipotesis < rand) {
      error4.innerHTML = `Has elegido el ${hipotesis}, tu número es menor que el pensado.  Intento ${cont} de 5.`;
      error4.style.color = "red";
      paso2.innerHTML = `${n}, tus números son el ${min} y el ${max}. <br>Adivina el número dentro de ese rango que ha pensado la máquina de manera aleatoria.`;
    } else if (hipotesis > rand) {
      error4.innerHTML = `Has elegido el ${hipotesis}, tu número es mayor que el pensado. Intento ${cont} de 5.`;
      error4.style.color = "red";
      paso2.innerHTML = `${n}, tus números son el ${min} y el ${max}. <br>Adivina el número dentro de ese rango que ha pensado la máquina de manera aleatoria.`;
    } else if (hipotesis == rand) {
      error4.innerHTML = `¡Enhorabuena ${n}! Has acertado el número (${rand}) en tu intento número ${cont}.`;
      finGris();
      error4.style.color = "orange";
      resetQ.classList.remove("oculto");
    }

    if (cont >= 5 && (hipotesis > rand || hipotesis < rand)) {
      error4.innerHTML = `Lo sentimos ${n}, has agotado tus intentos, el número era el ${rand}. ¡Suerte en tu próxima partida!`;
      finGris();
      error4.style.color = "red";
      resetQ.classList.remove("oculto");
    }
  } else {
    error4.innerHTML = `Lo sentimos ${n}, has agotado tus intentos, el número era el ${rand}. ¡Suerte en tu próxima partida!`;
    finGris();
    error4.style.color = "red";
    resetQ.classList.remove("oculto");
  }
  cont++;
}

function usedBtn(i) {
  console.log(i);
  let btnXpired = document.querySelector(`#btn${i}`);
  btnXpired.classList.remove("w3-teal", "w3-button");
  btnXpired.classList.add("w3-dark-grey", "w3-btn");
  btnXpired.removeAttribute("onclick");
}
function finGris() {
  for (let i = min; i <= max; i++) {
    usedBtn(i);
  }
}

// Listeners de Botones********************************
continuar1Btn.addEventListener("click", bienvenidoNombre);
continuar2Btn.addEventListener("click", checkMin);
continuar3Btn.addEventListener("click", checkMax);
reiniciarBtn.addEventListener("click", () => {
  location.reload();
});
no.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload();
});
