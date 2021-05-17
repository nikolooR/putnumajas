let banner1 = document.getElementById('banner1');
let banner2 = document.getElementById('banner2');
let banner3 = document.getElementById('banner3');





let spacer = document.getElementById('spacer');
let after = document.getElementById('after');

function parallax(){
    let value = Math.min(window.scrollY, 600);
    banner1.style.top = value * 0.35 + 'px';
    banner2.style.top = value * 0.2 + 'px';
    banner3.style.left = value * 0.1 + 'px';



   
    spacer.style.height = 'calc(100vw / ' + (window.innerWidth<=660?1.35:3.2) + ' + ' + (value * 0.2) + 'px)';
    after.style.marginBottom = 'calc(200px - '+ (value * 0.2) +'px)';
 
}

window.addEventListener('scroll', function(){parallax()});
window.addEventListener('resize', function(){parallax()});
window.onload = parallax();