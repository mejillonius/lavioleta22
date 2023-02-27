let num1;
let num2;
let num3;
let nomUser;
let tablaIntroDades;
let intentonas;
let value;
let fraseIntentos;
let frasePistas;

const mostra1 = document.querySelector("#mostra1");
const mostra2 = document.querySelector("#mostra2");
const mostra3 = document.querySelector("#mostra3");
const mostra4 = document.querySelector("#mostra4");
const principal = document.querySelector("#principal");
const botonsitos = document.querySelector("#botonsitos");
const alertName = document.querySelector("#alertName");
const alertNum1 = document.querySelector("#alertNum1");
const alertNum2 = document.querySelector("#alertNum2");
const inputNombre = document.querySelector("#nombre");
const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const btnNombre = document.querySelector("#btnNombre");
const btnNum1 = document.querySelector("#btnNum1");
const btnNum2 = document.querySelector("#btnNum2");
const sub1 = document.querySelector("#sub1");
const sub2 = document.querySelector("#sub2");
const sub3 = document.querySelector("#sub3");
const sub4 = document.querySelector("#sub4");

// Funciones relativas al nombre
// Pattern para el nombre
function patterNombre() {
	let ptrNombre = /^[A-Za-zÀ-ÿ]{2,40}$/;
	let checkNombre = inputNombre.value;
	if (!ptrNombre.test(checkNombre)) {
		alertName.innerHTML = "Algunos de los caracteres no se admiten";
		alertName.style.color = "#FF0000";
		inputNombre.style.border = "solid 1px red";
		btnNombre.disabled = true;
	} else {
		alertName.innerHTML = "Todo correcto";
		alertName.style.color = "#068B3E";
		inputNombre.style.border = "solid 1px green";
		btnNombre.disabled = false;
	}
}

//Almacena el nombre y muestra el siguiente DIV
btnNombre.onclick = function setName() {
	nomUser = inputNombre.value;
	mostra1.style.display = "none";
	mostra2.style.display = "block";
	sub1.innerHTML = `Hola, ${nomUser}. Vamos a jugar un juego.`;
};

// Funciones relativas al primer número
// Pattern para el primer número
function patterNum1() {
	let checkNum1 = inputNum1.value;
	if (checkNum1 > 10 || checkNum1 < 1) {
		alertNum1.innerHTML = "Solo números entre 1 y 10";
		alertNum1.style.color = "#FF0000";
		inputNum1.style.border = "solid 1px red";
		btnNum1.disabled = true;
	} else {
		alertNum1.innerHTML = "Todo correcto";
		alertNum1.style.color = "#068B3E";
		inputNum1.style.border = "solid 1px green";
		btnNum1.disabled = false;
	}
}

//Almacena el num1 y muestra el siguiente DIV
btnNum1.onclick = function setNum1() {
	num1 = Number(inputNum1.value);
	mostra2.style.display = "none";
	mostra3.style.display = "block";
	sub2.innerHTML = `Genial, ${nomUser}.`;
};

// Funciones relativas al segundo número
// Pattern para el segundo número
function patterNum2() {
	let checkNum2 = inputNum2.value;
	if (checkNum2 > 50 || checkNum2 < 30) {
		alertNum2.innerHTML = "Solo números entre 0 y 10";
		alertNum2.style.color = "#FF0000";
		inputNum2.style.border = "solid 1px red";
		btnNum2.disabled = true;
	} else {
		alertNum2.innerHTML = "Todo correcto";
		alertNum2.style.color = "#068B3E";
		inputNum2.style.border = "solid 1px green";
		btnNum2.disabled = false;
	}
}

//Almacena el num2 y muestra el siguiente DIV
btnNum2.onclick = function setNum2() {
	num2 = Number(inputNum2.value);
	num3 = Number(Math.floor(Math.random() * (num2 - num1)) + num1);
	console.log(num3);
	intentonas = 5;
	mostra3.style.display = "none";
	mostra4.style.display = "block";
	sub3.innerHTML = `Perfecto, ${nomUser}.`;
	sub4.innerHTML = `Te quedan ${intentonas} intentos...`;
	tablaIntroDades = "";
	for (let index = num1; index <= num2; index++) {
		tablaIntroDades += `<button onClick="check(${index})" id="boton${index}" class="w3-button w3-teal botoncillo">${index}</button>`;
	}
	botonsitos.innerHTML = tablaIntroDades;
};

function check(valor) {
	value = valor;
	let desactivaBoton = document.querySelector(`#boton${value}`);
	desactivaBoton.disabled = true;
	if (intentonas == 0) {
		principal.innerHTML = `<h1>HAS PERDIDO. <br> El número era el ${num3}</h1><button onClick="location.reload()" class="w3-button w3-black w3-margin-top"
                    type="button">Volver a intentar</button>`;
	} else if (intentonas == 1) {
		fraseIntentos = `Te queda ${intentonas} intento. `;
	} else {
		fraseIntentos = `Te quedan ${intentonas} intentos. `;
	}

	if (value < num3 && value > num3 - 5) {
		frasePistas = `Caliente Caliente... El número que buscas es más grande. `;
	} else if (value < num3 - 5) {
		frasePistas = `Frío, frío... El número que buscas es más grande. `;
	} else if (value > num3 && value < num3 + 5) {
		frasePistas = `Caliente Caliente... El número que buscas es más pequeño. `;
	} else if (value > num3 + 5) {
		frasePistas = `Frío, frío... El número que buscas es más pequeño. `;
	}

	if (value == num3) {
		principal.innerHTML = ` <h1>Felicidades, has acertado. Era el ${num3}</h1><button onClick="location.reload()" class="w3-button w3-black w3-margin-top"
                    type="button">Volver a jugar</button>`;
	} else {
		intentonas--;
		sub4.innerHTML = frasePistas + fraseIntentos;
	}
}

//Agregar los enters
// Enter para el Nombre
inputNombre.addEventListener("keyup", function (enterthedragon) {
	if (enterthedragon.keyCode === 13) {
		// Cancelación
		enterthedragon.preventDefault();
		// Aceptación
		btnNombre.click();
	}
});
// Enter para el Número 1
inputNum1.addEventListener("keyup", function (enterthedragon) {
	if (enterthedragon.keyCode === 13) {
		// Cancelación
		enterthedragon.preventDefault();
		// Aceptación
		btnNum1.click();
	}
});
// Enter para el Número 2
inputNum2.addEventListener("keyup", (enterthedragon) => {
	if (enterthedragon.keyCode === 13) {
		// Cancelación
		enterthedragon.preventDefault();
		// Aceptación
		btnNum2.click();
	}
});
