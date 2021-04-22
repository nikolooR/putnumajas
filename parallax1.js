let banner1 = document.getElementById('banner1');
let banner2 = document.getElementById('banner2');
let banner3 = document.getElementById('banner3');
let spacer = document.getElementById('spacer');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    banner1.style.top = value * 0.35 + 'px';
    banner2.style.top = value * 0.2 + 'px';
    banner3.style.left = value * 0.2 + 'px';
    spacer.style.height = 'calc(100vw / 3.2 - 10px + ' + (value * 0.2) + 'px)';
});
