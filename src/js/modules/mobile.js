const mobileNav = function(){
    const btn = document.querySelector(`.header--mobile`),
        mobileBlock = document.querySelector(`.main--chat--border`);


    btn.addEventListener(`click`, (e) =>{
        e.preventDefault();

        mobileBlock.classList.toggle(`main--chat--border-active`);
    })
    
    document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;

    if(event.scale > 1) {
        event.preventDefault();
    }
}, false);
}

export default mobileNav;