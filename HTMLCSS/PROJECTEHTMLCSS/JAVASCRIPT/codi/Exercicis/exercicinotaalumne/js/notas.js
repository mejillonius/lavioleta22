nota = Number(prompt("inserta la nota del alumno"));
if (nota < 5) {
    alert("Suspendido");
} else if (nota < 6) {
    alert("aprovado");
} else if (nota < 7){
    alert("bien");
} else if (nota < 9){
    alert("notable");
} else {
    alert("sobresaliente");
}