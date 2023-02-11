const get_search = document.querySelector('.search_btn');
const get_searchBox = document.querySelector('.popup-search');
const get_cart = document.querySelector('.cart_btn');
const get_cartBox = document.querySelector('.popup-cart');
const get_slider_next = document.querySelector('.siler-next')
const get_slider_back = document.querySelector('.siler-back')
const get_slider_wap = document.querySelector('.sider-wap')
const get_nav_menu = document.querySelector('.nav-menu')
const get_nav = document.querySelector('.nav')


get_search.onclick = () => {
    get_searchBox.classList.toggle('active') //thêm class active vào thẻ( biến) mới get ra//
}

get_cart.onclick = () => {
    get_cartBox.classList.toggle('active2')
}
get_nav_menu.onclick   = () => {
    get_nav.classList.toggle('active')
}
console.log(Math.floor(Math.random() * (20 - 10) + 10))