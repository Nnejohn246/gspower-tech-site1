// ------------------------------
// NAVIGATION SMOOTH SCROLL & ACTIVE LINK
// ------------------------------
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    // Only smooth scroll for in-page links starting with #
    if(link.getAttribute('href').startsWith('#')){
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });

            // Update active class
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            link.classList.add('active');
        });
    }
});

// ------------------------------
// HERO TEXT TYPING ANIMATION
// ------------------------------
const heroTitle = document.querySelector('.hero-content h1');
const heroText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter(){
    if(i < heroText.length){
        heroTitle.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();

// ------------------------------
// CONTACT FORM SUBMISSION
// ------------------------------
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting GosPower Tech! We will reach out to you soon.');
    contactForm.reset();
});

// ------------------------------
// OPTIONAL: MOBILE MENU TOGGLE
// ------------------------------
const navbar = document.querySelector('.navbar');
const menuBtn = document.createElement('div');
menuBtn.classList.add('menu-btn');
menuBtn.innerHTML = '&#9776;';
navbar.appendChild(menuBtn);

const navUl = navbar.querySelector('ul');
menuBtn.addEventListener('click', () => {
    navUl.classList.toggle('show');
});
