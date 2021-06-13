const mainMenu = document.querySelector('.menu-area')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = '0';
    openMenu.preventDefault();
    
}

function close(){
    mainMenu.style.top = '-100vh';
    closeMenu.preventDefault();
}