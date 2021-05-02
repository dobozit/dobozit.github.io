const mainMenu = document.querySelector('.nav-links')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(ev) {
    mainMenu.style.display = "flex";
    mainMenu.style.display = '0';

    ev.preventDefault();
    
}

function close(ev) {
    mainMenu.style.top = '-100vh';
    ev.preventDefault();
   

}