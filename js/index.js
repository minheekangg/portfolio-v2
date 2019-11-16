document.addEventListener('DOMContentLoaded', ()=>{
    console.log('LOADED')
    

    // scroll to the right;
    // init controller
    // var controller = new ScrollMagic.Controller({ vertical: false });

    // // build tween
    // var tween = TweenMax.to(".project", 0.5, { backgroundColor: "green", width: "+=400" });

    // // build scene
    // new ScrollMagic.Scene({ triggerElement: ".project", duration: 500 })
    //     .setTween(tween)
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);


    var revealElements = document.getElementsByClassName("card");
    console.log('cards are', revealElements)
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 90,												 // start a little later
            // triggerHook: 0.9,
        })
            .setTween(revealElements[i], 0.5, { marginTop: '200px' } ) // add class toggle
            .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
            .addTo(controller);
    }


})
