const openButton = document.querySelector('#open-sidebar-btn');
const navbar = document.querySelector('#navbar');


const media = window.matchMedia('(width< 700px)');
media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
    const isMobile = e.matches;
    console.log(isMobile);
    if(isMobile){
        navbar.setAttribute('inert', '');
    }
    else{
        //desktop device
        navbar.removeAttribute('inert');
    }
}

function openSidebar() {
    navbar.classList.add('show');
    openButton.setAttribute('aria-expanded', 'true');
    navbar.removeAttribute('inert');

}
function closeSidebar() {
    navbar.classList.remove('show');
    openButton.setAttribute('aria-expanded', 'false');
    navbar.setAttribute('inert', '');

}

updateNavbar(media);

//SCROLLER 
const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
};

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}
