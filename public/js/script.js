const btn = document.querySelector('[data-navbar]');
const menu = document.querySelector('#menu');
btn.addEventListener('click',()=>{
    menu.classList.toggle('show')
})
console.log(window.innerWidth);