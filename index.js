document.addEventListener('DOMContentLoaded', ()=>{
    console.log('LOADED')
    const buttons = document.querySelectorAll("#pin-category");
    console.log(buttons)
    buttons.forEach(button=>{
        button.addEventListener("click", (e)=>{
            handleClickedButton(e)
        })
    })


    function handleClickedButton (e){
        if (e.target.innerHTML === 'About'){
            console.log(e.target.innerHTML)
            // const about = document.getElementById('about-me').offset()
            // console.log(about)
            // window.animate(
            //   {
            //     scrollTop: about.offset().top
            //   },
            //   "slow"
            // );
        } else if (e.target.innerHTML === 'Projects')
        console.log(e.target.innerHTML)
    }

})
