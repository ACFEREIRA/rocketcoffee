let open = true;

const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu_mobile i");
const menuMobile = document.querySelector(".menu_mobile");

menuMobile.addEventListener("click", () => {
  menuClose.classList.toggle("close", open);
  menu.classList.toggle("open", open);
  open = !open;
});
