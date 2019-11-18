document.addEventListener('DOMContentLoaded', ()=>{
    
    var controller = new ScrollMagic.Controller();

    var revealElements = document.getElementsByClassName("card");
 
    for (var i = 0; i < revealElements.length; i++) { 
        var tween = TweenMax.fromTo(revealElements[i], 1, { yPercent: 20, opacity: 0.2 }, { yPercent: 0, opacity: 1, ease: Power1.easeInOut });;
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], 
			offset: 90,							
            triggerHook: 0.9,
        })
        .setTween(tween) 
        .addTo(controller);
    }


    var tween = TweenMax.to(".title-box .fa", 0.3, { scale: 3.5, repeat: 5, yoyo: true });

    var scene = new ScrollMagic.Scene({ triggerElement: "#projects",  trigger: -90, duration: "50%" })
        .setTween(tween)
        .addTo(controller);



})
