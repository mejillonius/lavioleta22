//---------------------
let col;
let row;

const ctabla = function tabla() {
  col = document.firstContact.columnas.value;
  row = document.firstContact.filas.value;
  // col = document.getElementById("columnas").value;
  // row = document.getElementById("filas").value;
  let tabla = `<table><tr><th></th>`;
  for (let i = 0; i < col; i++) {
    tabla += `<th>${i + 1} </th>`;
  }
  tabla += `</tr>`;
  for (let x = 0; x < row; x++) {
    tabla += `<tr>`;
    tabla += `<th> ${x + 1} </th>`;
    for (let z = 0; z < col; z++) {
      tabla += `<td contenteditable> Texto de la celda ${x + 1} -${
        z + 1
      }  </td>`;
    }
    tabla += `</tr>`;
  }
  tabla += `</table>`;

  document.getElementById("mostra").innerHTML = tabla;
};

const borrar = function eliminar() {
  document.getElementById("mostra").innerHTML = "";
  // document.getElementById("columnas").value = "";
  // document.getElementById("filas").value = "";
  document.firstContact.columnas.value = "";
  document.firstContact.filas.value = "";
};

const construye = document.getElementById("construir");
construye.onclick = ctabla;

const elimino = document.getElementById("eliminar");
elimino.onclick = borrar;
