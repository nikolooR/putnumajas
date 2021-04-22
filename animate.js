const navSlide = ()=> {

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')
//toggle nav
burger.addEventListener('click', () =>{

    nav.classList.toggle('nav-active')


//animate links

navLinks.forEach((link, index) => {
if(link.style.animation){
    link.style.animation = '';
}else{
link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
}

});

burger.classList.toggle('toggle');


});

}

navSlide();









const banner1 = document.getElementById('banner1');
const banner2 = document.getElementById('banner2');
const banner3 = document.getElementById('banner3');

window.addEventListener('scroll', function(){
 const value = window.scrollY;
 banner1.style.top = value * 0.35 + 'px';
 banner2.style.top = value * 0.2 + 'px';
 



});
