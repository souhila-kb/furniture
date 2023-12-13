let closer = document.querySelector('#closer');
/****************************closeing******************************/
closer.onclick = () =>{
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    signinForm.classList.remove('active');
    c_t.classList.remove('active');
    h_s.classList.remove('active');
    w_t.classList.remove('active');
    o_c.classList.remove('active');
    n_w.classList.remove('active');
    B.classList.remove('active');
    l.classList.remove('active');
}
/****************************open menu******************************/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}
/****************************open cart******************************/
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    closer.style.display = 'block';
    cart.classList.toggle('active');
}
/****************************open loging form******************************/
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}
document.querySelector('#loging').onclick = () =>{
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
    signinForm.classList.remove('active');
}

/****************************open signin form******************************/
let signinForm = document.querySelector('.signin-form');

document.querySelector('#signin').onclick = () =>{
    closer.style.display = 'block';
    signinForm.classList.toggle('active');
    loginForm.classList.remove('active');
}
/****************************open search form******************************/
let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}
/****************************slide transform******************************/
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
/****************************open products list******************************/
let c_t = document.querySelector('#C-T');

document.querySelector('#c-t').onclick = () =>{
    closer.style.display = 'block';
    c_t.classList.toggle('active');
}
let B = document.querySelector('#B');

document.querySelector('#n-b').onclick = () =>{
    closer.style.display = 'block';
    B.classList.toggle('active');
}
let o_c = document.querySelector('#O-C');

document.querySelector('#o-c').onclick = () =>{
    closer.style.display = 'block';
    o_c.classList.toggle('active');
}
let n_w = document.querySelector('#N-W');

document.querySelector('#n-w').onclick = () =>{
    closer.style.display = 'block';
    n_w.classList.toggle('active');
}
let w_t = document.querySelector('#W-T');

document.querySelector('#w-t').onclick = () =>{
    closer.style.display = 'block';
    w_t.classList.toggle('active');
}
let h_s = document.querySelector('#H-S');

document.querySelector('#h-s').onclick = () =>{
    closer.style.display = 'block';
    h_s.classList.toggle('active');
}
let l = document.querySelector('#L');

document.querySelector('#l').onclick = () =>{
    closer.style.display = 'block';
    l.classList.toggle('active');
}