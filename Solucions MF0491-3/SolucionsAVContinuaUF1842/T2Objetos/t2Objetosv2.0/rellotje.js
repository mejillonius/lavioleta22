function initLocalClocks() {
  document.title = window.name;

  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (hours >= 6 && hours <= 14) {
    document.getElementById("bones").innerHTML = "Bon dia";
  } else if (hours > 14 && hours < 20) {
    document.getElementById("bones").innerHTML = "Bona tarda";
  } else {
    document.getElementById("bones").innerHTML = "Bona nit";
  }
  document.getElementById("hours").style.transform =
    "rotateZ(" + hours * 30 + "deg)";
  document.getElementById("minutes").style.transform =
    "rotateZ(" + minutes * 6 + "deg)";
}
