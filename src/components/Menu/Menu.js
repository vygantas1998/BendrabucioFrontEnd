const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navBottom = document.querySelector('.nav-links-bottom');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navLinksBottom = document.querySelectorAll('.nav-links-bottom li');
    

    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
        navBottom.classList.toggle('nav-bottom-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
            link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
        })
        navLinksBottom.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        }
        );
        //Burger Animation
        burger.classList.toggle('toggle');

    });
}

navSlide();