const error = document.querySelector("#error");
const m1 = document.querySelector("#mostra1");
const m2 = document.querySelector("#mostra2");
/* const m3 = document.querySelector("#mostra3");
const m4 = document.querySelector("#mostra4");
const m5 = document.querySelector("#mostra5"); */
const m6 = document.querySelector("#mostra6");

const formu = document.firstContact;
const ptremail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,9}$/;
/* const ptrasunto = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{5,40}$/; */
const ptrasunto = /^[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{5,40}$/;

formu.addEventListener("submit",(e) =>{
    const mymail = mail();
    const myasunto = asunto();
/*    const mycontent = content(); */
    if (!mymail || myasunto){
        e.preventDefault();
        error.innerHTML = "ERROR no se ha podido enviar el formulario";
        error.style.color = "#FF0000";
        return false;
    } else {
/*         error.innerHTML = "enviando";
        error.style.color = "#068b3e"; */
        formu.submit();

    }
})


const mail = () => {
    let correo = formu.email.value;
    if (!correo.match(ptremail)) return false;
    return true;
}
const asunto = () => {
    let asunto = formu.asunto.value;
    if (!asunto.match(ptrasunto)) return false;
    return true;
}
const vCheck = () => {
    let aceptar = formu.acepto.checked;
    if (!aceptar) return false;
    return true;
};

function pasaValor(e) {
    let result;
    switch (e.target.name) {
        case "email":
            result = mail();
            if (result) {
                m1.innerHTML = "Email correcto.";
                m1.style.color = "#068b3e";
                email.style.border = "solid 2px green";
            } else {
                m1.innerHTML = "email no valido se esperaba una @ y un punto.";
                m1.style.color = "#ff0000";
                email.style.border = "solid 2px red";
            }
            break;
        case "asunto":
            result = asunto();
            if (result) {
                m2.innerHTML = "asunto correcto correcto.";
                m2.style.color = "#068b3e";
                asunto.style.border = "solid 2px green";
            } else {
                m2.innerHTML = "longitud incorrecta";
                m2.style.color = "#ff0000";
                asunto.style.border = "solid 2px red";
            }
            break;
        case "acepto":
            result = vCheck();
            if (result) {
                m6.innerHTML = "asunto correcto correcto.";
                m6.style.color = "#068b3e";
            } else {
                m6.innerHTML = "longitud incorrecta";
                m6.style.color = "#ff0000";
            }
            break;
    }
}

const avisoReset = () => {
    const reset = confirm("ATENCION VAS A BORRARLO TODO!!!");
    reset ? location.reload(true): false; //esto es un ternario
}


formu.addEventListener("keyup", pasaValor);
formu.acepto.addEventListener("click", pasaValor)
formu.borrar.addEventListener("click",avisoReset);

