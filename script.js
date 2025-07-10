const hamMenu = document.querySelectorAll(".ham");
hamMenu.forEach((x) => {
  x.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    if (menu.classList.contains("active-ham-men")) {
      menu.classList.remove("active-ham-men");
    } else {
      menu.classList.add("active-ham-men");
    }
  });
});
