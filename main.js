// Seleciona os elementos relevantes
var navMenu = document.getElementById('nav_menu');
var menuCloseButton = document.querySelector('.menu_close_button');
var menuMobileButton = document.querySelector('.menu_mobile');

// Adiciona um event listener para abrir o menu mobile
if (menuMobileButton) {
  menuMobileButton.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });
}

// Adiciona um event listener para fechar o menu mobile
if (menuCloseButton) {
  menuCloseButton.addEventListener('click', function () {
    navMenu.classList.remove('open');
  });
}