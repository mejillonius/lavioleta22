document.title = window.name;
// 9
function diasTardes(){
var d= new Date();
var hora=d.getHours();
var textHora="";

if(hora>=6&&hora<=14){
	textHora="Buenos días";
	}
	else if(hora>14&&hora<20){
	textHora="Buenas tardes";
		}
		else{
		textHora="Buenas noches"
		}
document.getElementById("saludo").innerHTML = textHora;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var hora=function hora() {
  var y = new Date();
  var h = addZero(y.getHours());
  var m = addZero(y.getMinutes());
  var s = addZero(y.getSeconds());

  document.getElementById("horas").innerHTML = h + ":" + m + ":" + s;
}

var myVar = setInterval(hora, 1000);



// 10

function direccion(){
	var error="";
	var direccion="";

	do{
	direccion=prompt(error+" Introduce una nueva dirección HTML para la página principal.");
	error="ERROR!!!!";
	var ptr = /^(http|https):\/\/[a-z0-9\.-]+\.[a-z]{2,6}/;
	var comprobar=ptr.test(direccion);
	console.log(direccion);
}while(!comprobar);
	error="";

window.opener.location.replace(direccion);

};


window.onload=diasTardes();
window.onload=myVar;
window.onload=direccion();
