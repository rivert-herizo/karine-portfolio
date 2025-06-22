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

// slideshow 1

const slides_one = document.querySelectorAll('.home-portfolio-slideshow img');

  console.log(slides_one);
  let currentIndex_one = 0;

  setInterval(() => {
    slides_one[currentIndex_one].classList.remove('active');
    currentIndex_one = (currentIndex_one + 1) % slides_one.length;
    slides_one[currentIndex_one].classList.add('active');
  }, 3000);

// slideshow 2

const slides = document.querySelectorAll('.home-personal-portfolio-slideshow img');

  console.log(slides);
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 3000);

// Resume timeline

document.addEventListener("scroll", function () {
    document.querySelectorAll(".skills-list-item").forEach((card, index) => {
        let rect = card.getBoundingClientRect();
        
        if (rect.top <= 20) { // When the card reaches the top
            card.style.transform = `rotate(${(index % 2 === 0 ? 1 : -1)}deg)`; // Alternating rotations
        } else {
            card.style.transform = "rotate(0deg)"; // Reset rotation if it's not at the top
        }
    });
});

const timeline_cards = document.querySelectorAll(".card-text-box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const card = entry.target;
        
        if (entry.isIntersecting) {
            card.style.opacity = "1!important";
            // Move the card to the center when in view
            if (card.closest('.left-container')) {
                card.style.left = "-20%";  // Move it to the left
                card.style.opacity = "1!important";
            } else if (card.closest('.right-container')) {
                card.style.left = "20%";   // Move it to the right
                card.style.opacity = "1!important";
            }
            card.style.opacity = "1";
            
        } else {
            // When out of view, reset the left property to its initial position
            if (card.closest('.left-container')) {
                card.style.left = "5%";  // Move it to the left
            } else if (card.closest('.right-container')) {
                card.style.left = "-5%";   // Move it to the right
            }
        }
    });
}, {
    threshold: 0.5
});

// Add hover effect using JavaScript
timeline_cards.forEach(card => {
    // Mouse enter event to apply hover effect
    card.addEventListener('mouseenter', () => {
        if (card.closest('.left-container')) {
            card.style.left = '2%'; // Move to center if it's in the left container
        } else if (card.closest('.right-container')) {
            card.style.left = '-2%'; // Move to center if it's in the right container
        }
    });

    // Mouse leave event to reset styles after hover
    card.addEventListener('mouseleave', () => {
        if (card.closest('.left-container')) {
            card.style.left = '-20%';  // Reset position for left container
        } else if (card.closest('.right-container')) {
            card.style.left = '20%';   // Reset position for right container
        }
    });

    // Observe the cards for intersection changes
    observer.observe(card);
});

const timeline_mobile_cards = document.querySelectorAll(".mobile-text-box");

const mobile_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const card = entry.target;
        
        if (entry.isIntersecting) {
            card.style.left = "10%"; 
            card.style.opacity = "1";
            
        } else {
            card.style.left = "0%";
        }
    });
}, {
    threshold: 0.5
});

// Add hover effect using JavaScript
timeline_mobile_cards.forEach(card => {
    // Mouse enter event to apply hover effect
    card.addEventListener('mouseenter', () => {
        if (card.closest('.left-container')) {
            card.style.left = '2%'; // Move to center if it's in the left container
        } else if (card.closest('.right-container')) {
            card.style.left = '-2%'; // Move to center if it's in the right container
        }
    });

    // Mouse leave event to reset styles after hover
    card.addEventListener('mouseleave', () => {
        if (card.closest('.left-container')) {
            card.style.left = '-20%';  // Reset position for left container
        } else if (card.closest('.right-container')) {
            card.style.left = '20%';   // Reset position for right container
        }
    });

    // Observe the cards for intersection changes
    mobile_observer.observe(card);
});

var service_nav = document.querySelectorAll('.service-nav');
var service_section = document.querySelectorAll('.service-section');

service_nav.forEach((nav, index) => {
    nav.addEventListener('click', function () {
        service_section.forEach(section => section.style.display = 'none'); // Hide all sections
        service_nav.forEach(navItem => navItem.classList.remove('active')); // Remove active class
        
        nav.classList.add('active'); // Add active class to clicked nav item
        service_section[index].style.display = 'flex'; // Show corresponding section
    });
});

const boxes = document.querySelectorAll('.ghost-writing-box');
const modal = document.getElementById('modal');
const modalTitle = document.querySelector('.modal-main-title');
const modalType = document.querySelector('.modal-box-type');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal-content');
const modalText = document.querySelector('.modal-head');


boxes.forEach(box => {
    console.log(box);
    box.addEventListener('click', () => {
        const boxtitle = box.querySelector('.box-main-title').innerText;
        const boxtype = box.querySelector('.box-type').innerText;
        const boxContentIntro = box.querySelector('.box-text-intro');
        const boxContentText = box.querySelector('.box-text-content');
        const boxTextColor = getComputedStyle(box).color;
        const workButton = document.querySelector('.workbutton');
        const boxContent = document.querySelector('.box-content');

        modalTitle.innerHTML = boxtitle;
        modalType.innerText = boxtype;
        boxContent.innerText = boxContentIntro.innerText;
        workButton.style.display = 'flex';

        workButton.addEventListener('click', () => {  
            modalTitle.innerHTML = boxtitle;
            modalType.innerHTML = boxtype;      
            boxContent.innerText = boxContentText.innerText;
            modal.style.display = 'flex';
            modalContent.scrollTop = 0;
            workButton.style.display = 'none';
        });
        console.log(getComputedStyle(box).backgroundColor);
        modalText.style.color = boxTextColor;
        modalContent.style.backgroundColor = getComputedStyle(box).backgroundColor;
        modal.style.display = 'flex';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



