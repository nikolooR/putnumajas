const moving ={
    curviness: 1,
    autoRotate: true,
    values: [
        {x:50, y: 0},
        {x:500, y: -50},
        {x:window.innerWidth, y: - window.outerHeight},

    ]

};

const tween = new TimelineLite();

tween.add(

    TweenLite.to('.kontakti', 1, {
        bezier: moving,
        ease: Power1.easeInOut

    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({

triggerElement: '.animation',
duration: 3000,
triggerHook: 0

})

.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);