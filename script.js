// function toggleMenu() {
//   var navMenu = document.getElementById('nav_menu');
//   navMenu.classList.toggle('open');
// }

function toggleMenu(event) {
  var navMenu = document.getElementById('nav_menu'); /* Menu Mobile */
  var menuCloseButton = document.querySelector('.menu_close_button'); /* Botão fechar Menu Mobile */
  var menuMobileButton = document.querySelector('.menu_mobile'); /* Botão hamburguer abrir Menu Mobile */

  if (event.target === menuMobileButton) {
    navMenu.classList.toggle('open');
  }

  else if (event.target === menuCloseButton) {
    navMenu.classList.remove('open');
  }
}
