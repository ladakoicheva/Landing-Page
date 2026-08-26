const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.burger-menu');


const showMenu = () => {

  
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('open');
 
}

menuIcon.onclick = showMenu;