let variable1 = 10;
let variable2 = 5;

function salir(){
    location.replace("https://www.google.com");
}

variable2 = Number(window.prompt("indica un numero"));
let resul = variable1 + variable2;
if (resul>20) {
    alert("resultado mayor a 20");
} else if (resul<20) {
    alert("resultado menor que 20");
} else {
    alert ("resultado igual a 20");
}

let recarga = confirm("quieres volver a cargar el documento?");
if(recarga){
    location.reload(true); //recarga desde el servidor
} else {
    salir();
}

/*         let videas_restantes = 3;
        let numero = Number(window.prompt("inserta un numero"));
        let result = videas_restantes + numero;
        alert(`vidas restantes:  ${result}`);
        console.log(`vidas restantes:  ${result}`); */

        var hola = "Hola mundo";
        let hello = "Hello world";


        console.log(hola,hello);
        console.log(window.hola,window.hello);
        hola = 20;
        
        function testVar(){
            console.log(hola);
            let hola = 30;
            console.log(hola);
            if(hola){
                hola = 80;
                console.log(hola);
            }
        }
        testVar();
        console.log(hola);