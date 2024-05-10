function toogleMenu() {
  const menu = document.getElementById('nav_menu');
  // menu.style.display = 'block';
  // 1 - verificar se o menu esta aberto
  // 2 - se estiver aberto: fecha menu
  // 3 - se fechado: abre
  if (menu.style.display === 'block') {
    return menu.style.display = 'none';
  }
  menu.style.display = 'block';
}