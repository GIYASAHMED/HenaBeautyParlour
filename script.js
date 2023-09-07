let menu = document.querySelector('#menu')
let menu_icon = document.querySelector('.menu_icon')
let menu_bar = document.querySelector('.menu_bar')


let hh = 0
menu_icon.addEventListener('click', function () {

    if (hh == 0) {
        menu_bar.classList.add('active')
        menu_icon.innerHTML = `<i class="ri-close-fill"></i>`
        hh = 1
        
    } else {
        menu_bar.classList.remove('active')
        menu_icon.innerHTML = `<i class="ri-menu-line" id="menu"></i>`
        hh = 0
    }
    
})