// Dichiarazioni e funzione per Hamburger menu

const hamMenu = document.querySelector(".ham-men");
const closeBtnHam = document.querySelector(".close-btn-ham");
const menu = document.querySelector(".menu");
const ham = document.querySelectorAll(".ham");

hamMenu.addEventListener("click", () => {
  if (menu.classList.contains("active-ham-men")) {
    menu.classList.remove("active-ham-men");
    ham.forEach((span) => {
      span.style.display = "flex";
    });
    closeBtnHam.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  } else {
    ham.forEach((span) => {
      span.style.display = "none";
    });
    closeBtnHam.style.display = "flex";
    menu.classList.add("active-ham-men");
    document.querySelector("body").style.overflow = "hidden";
  }
});

// Dichiarazioni per bottone cambio colore pagina
const containerBtnLight = document.querySelector(".container-btn-light");
const btnLight = document.querySelector(".btn-light");
const light = document.querySelector(".light");
const imgLight = document.getElementById("btnImage");

containerBtnLight.addEventListener("click", () => {
  // Dichiarazione di elementi che cambiano colore
  const header = document.querySelector("header");
  const allP = document.querySelectorAll("p");
  const allH3 = document.querySelectorAll("h3");
  const main = document.querySelector("main");

  const toDarkToWhiteBackground = [header, menu, main];
  const toWhiteToDarkText = [...allP, ...allH3];

  if (light.classList.contains("light-active")) {
    light.classList.remove("light-active");
    imgLight.src = "moon-icon-0.png";

    toDarkToWhiteBackground.forEach((x) => {
      x.classList.remove("changeBackground");
    });

    toWhiteToDarkText.forEach((x) => {
      x.classList.remove("changeColorText");
    });
    menu.classList.remove("changeShadowActiveMenu");
  } else {
    light.classList.add("light-active");
    imgLight.src =
      "pngtree-simple-sunshine-clipart-image-png-image_6527088.png";

    toDarkToWhiteBackground.forEach((x) => {
      x.classList.add("changeBackground");
    });

    toWhiteToDarkText.forEach((x) => {
      x.classList.add("changeColorText");
    });
    menu.classList.add("changeShadowActiveMenu");
  }
});
