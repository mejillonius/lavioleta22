window.onscroll = () => {
  if (window.pageYOffset >= 200) {
    document.querySelector(".n-button").classList.remove("hide");
  } else {
    document.querySelector(".n-button").classList.add("hide");
    
  }
};



/* const mainSection = document.querySelector("#main-show");
const cornerButton = document.querySelector("#corner-button");

  // Show the button after the main section
  mainSection.addEventListener("load", () => {
    cornerButton.classList.remove("hide");
  });
 */