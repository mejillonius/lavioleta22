nota = Number(prompt("inserta primera la nota del alumno"));
nota2 = Number(prompt("inserta segunda la nota del alumno"));
media = Math.floor((nota+nota2)/2);
/* alert(media); */
if (media < 5) {
    alert("Suspendido");
} else if (media < 6) {
    alert("aprovado");
} else if (media < 7){
    alert("bien");
} else if (media < 9){
    alert("notable");
} else {
    alert("sobresaliente");
}