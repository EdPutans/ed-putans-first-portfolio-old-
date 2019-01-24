let navList = document.querySelector('.topbar-list')
let menuButton = document.querySelector('.burger-button')

let navBarOpen = false

menuButton.addEventListener('click', e =>{
    e.preventDefault()
    navBarOpen = !navBarOpen
    navList.hidden = navBarOpen
})