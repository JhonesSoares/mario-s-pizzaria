
function abrir_menu () {
    if (menu.style.display == 'block'){
        menu.style.display = 'none'    
    } else {
        menu.style.display = 'block'
    }
}

function mudarTamanho () {
    if (window.innerWidth >= 800){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}