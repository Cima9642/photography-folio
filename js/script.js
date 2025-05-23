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