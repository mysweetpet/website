// Menu mobile behavior
const burgerMenu = document.querySelector(".nav_burger")
const lines = burgerMenu.children;

burgerMenu.addEventListener('click', (e) => {
    const menuLinks = document.querySelector('.nav_menu')
    if(lines[0].checked === true){
        // Burger menu behavior
        lines[1].classList.remove('open1')
        lines[2].classList.remove('open2')
        lines[3].classList.remove('open3')

        lines[1].classList.add('close1')
        lines[2].classList.add('close2')
        lines[3].classList.add('close3')

        // Menu links behavior
        const menuLinks = document.querySelector('.nav_menu')
        menuLinks.classList.add('showMenu')
        menuLinks.classList.remove('hideMenu')

    } else {
        // Burger menu behavior
        lines[1].classList.add('open1')
        lines[2].classList.add('open2')
        lines[3].classList.add('open3')

        lines[1].classList.remove('close1')
        lines[2].classList.remove('close2')
        lines[3].classList.remove('close3')

        menuLinks.classList.add('hideMenu')
        menuLinks.classList.remove('showMenu')

        //Menu links behavior
    }
})