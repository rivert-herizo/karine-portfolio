// Initialize the scroll behavior of the header

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down: Hide the header
        header.classList.add("header-hidden");
    } else {
        // Scrolling up: Show the header
        header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY;
});

// Reapply the responsiveness if needed

window.dispatchEvent(new Event('resize'));

function toggleMenu() {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".header-mobile");

    menuIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
}

// Lottie animations

var animation1 = lottie.loadAnimation({
    container: document.getElementById('animation1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/lottie/write-animation.json'
});

var animation2 = lottie.loadAnimation({
    container: document.getElementById('animation2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/lottie/pieces-animation.json'
});

var animation3 = lottie.loadAnimation({
    container: document.getElementById('animation3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/lottie/scene-animation.json'
});