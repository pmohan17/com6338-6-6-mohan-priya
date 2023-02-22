//var menu = document.querySelector(".menu")
var menuBtn = document.querySelector ("button.hamburger-btn")
var hamburgerMenu = document.querySelector (".hamburger-menu")

function openMenu(e) {
    e.stopPropagation()
    hamburgerMenu.classList.toggle("show-menu")
    menuBtn.setAttribute('aria-expanded', true)
    if (hamburgerMenu.classList.contains('show-menu')) {
        menuBtn.setAttribute('aria-expanded', true)
    } else {
        menuBtn.setAttribute('aria-expanded', false)
    }
    menuBtn.focus()
}
menuBtn.onclick = openMenu

function closeMenu(e) {
e.stopPropagation()
hamburgerMenu.classList.remove('show-menu')
menuBtn.setAttribute('aria-expanded', false)
document.activeElement.blur()
menuBtn.focus()
if (hamburgerMenu.classList.contains('show-menu')) {
    menuBtn.setAttribute('aria-expanded', true)
    hamburgerMenu.classList.toggle("show-menu")
} else {
    menuBtn.setAttribute('aria-expanded', false)
}
}
document.body.onclick = function(e) {
    if (!hamburgerMenu.contains(e.target)){
        closeMenu(e)
    }
    
}
document.onkeyup = function(e){
    if (e.key === 'Escape'){
        closeMenu(e)
    if (e.key === 'Escape' && !hamburgerMenu.contains(e.target)){
        closeMenu(e)
    }}}

