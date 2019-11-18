document.addEventListener('DOMContentLoaded', ()=>{
    console.log('PROJECT LOADED')

    var controller = new ScrollMagic.Controller({vertical: false});

    var highlights = document.querySelectorAll('.highlight');
    console.log('highlights are', highlights)
    highlights.forEach(function(each){
        console.log('current', each.offsetWidth)

        new ScrollMagic.Scene({ triggerElement: each })
            .setClassToggle(each, ".highlight") // add class toggle
            .addTo(controller);
    })

   
})
// var controller = new ScrollMagic.Controller();

// var tl = new TimelineMax();

// var elementWidth = document.getElementById('#project1').offsetWidth;

// var width = window.innerWidth - elementWidth;

// var duration = elementWidth / window.innerHeight * 100;

// var official = duration + '%';

// tl
//     .to('#project1', 5, { x: width, ease: Power0.easeNone });

// var scene1 = new ScrollMagic.Scene({
//     triggerElement: '#project1',
//     triggerHook: 0,
//     duration: official
// })
//     .setPin('#project1')
//     .setTween(tl)
//     .addTo(controller);

// console.log(elementWidth);
