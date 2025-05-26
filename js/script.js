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

window.onload = function () {
    const scrollText = document.querySelector("#scrollText");
    const textWidth = scrollText.offsetWidth;
    const containerWidth = scrollText.parentElement.offsetWidth;
    const distance = textWidth + containerWidth;

    const speed = 100; // pixels per second (lower is slower)
    const duration = distance / speed;

    scrollText.style.animationDuration = `${duration}s`;
    scrollText.style.setProperty("--scroll-distance", `-${textWidth}px`);
  };

