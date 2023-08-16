const open_menu = document.getElementById('open-menu')
const close_menu = document.getElementById('close-menu')
const navlinks = document.getElementById('navbar')

// ? closing of mobile menu navigations
close_menu.onclick = () => {
    navlinks.style.display = 'none'
    open_menu.style.display = 'block'
    close_menu.style.display = 'none'
}

// ? opening of mobile menu navigations
open_menu.onclick = () => {
    navlinks.style.display = 'block'
    open_menu.style.display = 'none'
    close_menu.style.display = 'block'
}