document.addEventListener('DOMContentLoaded', ()=>{
    console.log('LOADED')
    

    // scroll to the right;
    var controller = new ScrollMagic.Controller();

    // // build tween
    // var tween = TweenMax.to(".project", 0.5, { backgroundColor: "green", width: "+=400" });

    // // build scene
    // new ScrollMagic.Scene({ triggerElement: ".project", duration: 500 })
    //     .setTween(tween)
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);


    var revealElements = document.getElementsByClassName("card");
 
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
        var tween = TweenMax.fromTo(revealElements[i], 1, { yPercent: 20, opacity: 0.2 }, { yPercent: 0, opacity: 1, ease: Power1.easeInOut });;
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
			offset: 90,								 // start a little later
            triggerHook: 0.9,
        })
        .setTween(tween) 
        .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
        .addTo(controller);
    }




    
    
    // var projects = document.getElementsByClassName("project");
    // var controller = new ScrollMagic.Controller({ vertical: false });
    
    // for (var i = 0; i < projects.length; i++) { // create a scene for each element
    //     var tween = TweenMax.fromTo(projects[i], 0.5, { flexBasis: '450px', opacity: 0.2 }, { flexBasis: '400px', opacity: 1, ease: Power1.easeInOut });;
    //     new ScrollMagic.Scene({
    //         triggerElement: projects[i], // y value not modified, so we can use element as trigger as well
    //         offset: 90,								 // start a little later
    //         triggerHook: 0.9,
    //     })
    //         .setTween(tween)
    //         .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
    //         .addTo(controller);
    // }


})
