const ex1input = document.querySelector("#ex1 input");
const ex1button = document.querySelector("#ex1 button");
const ex1output = document.querySelector("#ex1 p");


const ex1 = () => {
    ex1output.innerHTML = ex1input.value % 2 ? "es impar" : "es par";
}


ex1button.addEventListener("click",ex1);