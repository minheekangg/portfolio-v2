document.addEventListener('DOMContentLoaded', ()=>{
    console.log('LOADED')
    

    // scroll to the right;
    // init controller
    var controller = new ScrollMagic.Controller({ vertical: false });

    // build tween
    var tween = TweenMax.to(".project", 0.5, { backgroundColor: "green", width: "+=400" });

    // build scene
    new ScrollMagic.Scene({ triggerElement: ".project", duration: 500 })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);




})
