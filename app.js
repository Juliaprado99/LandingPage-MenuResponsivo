let menu = document.getElementById('menu')
let btnAbrir = document.getElementById('btnAbrir')
let btnFechar = document.getElementById('btnFechar')
let h1 = document.getElementById('h1')
let nav = document.getElementById('nav')
let body = document.getElementById('body')


function abrir(){
    nav.style.display = 'none'
    menu.style.display = 'block'
    h1.style.display = 'none'
    btnAbrir.style.display = 'none'
}



function fechar(){

    menu.style.display = 'none'
    h1.style.display = 'block'
    btnAbrir.style.display = 'block'

}