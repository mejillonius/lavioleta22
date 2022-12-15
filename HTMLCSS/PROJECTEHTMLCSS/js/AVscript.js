const abrirvideo = document.getElementById("abrirvideo");
const abrirvideo2 = document.getElementById("abrirvideo2");
const playpause = document.getElementById("playPause");
const pley = document.getElementById("pley");
const ipausa = document.getElementById("pausa");

const myVideo = document.getElementById("video1");
function abrirVideoFondo() {
  // window.open("bgimage.html");
  window.open(
    "bgvideo.html",
    "new",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
  );
}
function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}
function reproduce() {
  myVideo.play();
}
function pausa() {
  myVideo.pause();
}

abrirvideo.onclick = abrirVideoFondo;
abrirvideo2.onclick = abrirVideoFondo;
playpause.onclick = playPause;
pley.onclick = reproduce;
ipausa.onclick = pausa;
