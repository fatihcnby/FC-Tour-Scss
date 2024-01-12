

const menuBtn=document.querySelector('.icon')


const menuLinks=document.querySelector('.menu-links')

menuBtn.addEventListener('click',()=>{
    menuLinks.classList.toggle('mobile-menu')
})