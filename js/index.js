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




    const projectsArray = [
        {
            link: 'projects/travel-blog.html',
            isSoloProject: true,
            where: 'Personal Project',
            image: 'images/travel-thumb.png'
        },
        {
            link: 'projects/skift-subscription.html',
            isSoloProject: false,
            where: '@Skift',
            image: 'images/skift-subthumb.png'
        },
        {
            link: 'projects/skift-skifternet.html',
            isSoloProject: false,
            where: '@Skift',
            image: 'images/skifternet-thumb.png'
        },
        {
            link: 'projects/capsule-wardrobe.html',
            isSoloProject: true,
            where: '@Flatiron',
            image: 'images/capsule-thumb.png'
        },
        {
            link: 'projects/sgf-magazine.html',
            isSoloProject: true,
            where: '@Skift',
            image: 'images/skiftmag-thumb.png'
        },
        {
            link: 'projects/skiftx-brandusa.html',
            isSoloProject: true,
            where: '@Skift',
            image: 'images/brandusa-thumb.png'
        },
        {
            link: 'projects/spend-abroad.html',
            isSoloProject: true,
            where: '@Skift',
            image: 'images/spend_abroad.png'
        },
        {
            link: 'projects/korean101.html',
            isSoloProject: true,
            where: '@Flatiron',
            image: 'images/korean101-thumb.png'
        },
        
    ]
    var projectSection = document.querySelector('#projects');
    projectSection.innerHTML += projectsArray.map((project, idx) => {
        return `<div class="project">
                    <a href=${project.link} >
                        <p><span>${project.isSoloProject ? 'solo project' : 'team project'}</span></p>
                        <p>${project.where || ""}</p>
                        <div class="project-pic"><img src=${project.image} /></div>
                        <h3> ${idx + 1} </h3>
                    </a>
                </div>`
    }).join("")

    
})