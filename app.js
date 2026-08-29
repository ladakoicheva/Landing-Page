const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.burger-menu');
const mobile_nav = document.querySelector('.header-mobile-nav');

const show_hide_Menu = () => {

  
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('open');
 
}

mobile_nav.onclick = (e) => {
  if (e.target.tagName = 'a') show_hide_Menu();
}

menuIcon.onclick = show_hide_Menu;
