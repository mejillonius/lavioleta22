const ex1in = document.querySelector("#ex1Input");
const ex1out = document.querySelector("#ex1Output");
const ex1but = document.querySelector("#ex1Button");
const ex2but = document.querySelector("#ex2Button");
const ex2in = document.querySelector("#ex2Input");
const ex2out = document.querySelector("#ex2Output");
const ex3ina = document.querySelector("#ex3InputA");
const ex3inb = document.querySelector("#ex3InputB");
const ex3out = document.querySelector("#ex3Output");
const ex3but = document.querySelector("#ex3Button");

function exercici1 () {
    ex1out.innerHTML = ex1in.value%2==0 ? "es par" : "es impar";
}

const calculadora = () => {
    return 144/12;
}
function exercici2 () {
    if (ex2in.value == calculadora()){
        alert("correcto, puedes pasar");
    } else {
        ex2out.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/SXG5W_3FtLY?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
}




ex1but.addEventListener("click", exercici1);
ex2but.addEventListener("click", exercici2);
ex3but.addEventListener("click", exercici3);
