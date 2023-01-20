function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    console.log("im in");
    mytime = setTimeout('muestraReloj()', refresh)
    console.log("im in");
}

function muestraReloj() {
    let msg = "";
    let tiempo = new Date();
    const target = document.querySelector("#reloj h1");
    segundos = tiempo.getSeconds() < 10 ? `0${tiempo.getSeconds()}`: tiempo.getSeconds();
    hora = tiempo.getHours();
    let bonditardanit = "";
    if (hora >= 0 && hora < 6){
        bonditardanit = "Buenas noches";
    } else if (hora >= 6 && hora < 14) {
        bonditardanit = "Buenos dias";
    } else if (hora >= 14 &&  hora< 20) {
        bonditardanit = "Buenas tardes";
    } else {
        bonditardanit = "Buenas noches";
    };
    msg = `${bonditardanit}!!!!!!!!  ${hora}:${tiempo.getMinutes()}:${segundos}`;


    target.innerHTML = msg;
}

/* console.log("totla");
display_c(); */
setInterval(muestraReloj, 1000);
window.opener.location.href =  prompt("introduce una pagina web para redirigir la pagina padre", "https://www.w3schools.com");
