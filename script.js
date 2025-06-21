// Navbar Scrolled CSS Property
window.addEventListener('scroll', () => {
    const navbar = document.querySelector(".navbar");
    if (scrollY > 100){
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});

// Profile Section Redirecting
const profile_Icon = document.querySelector(".profile-icon");
profile_Icon.addEventListener("click" , () => {
    window.location.href = 'profile-details.html' ;
});

// Movie Card
const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card) => {
    card.addEventListener('mouseEnter', () => {
        card.style.transform = 'scale(1.1)' ;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)' ;
    });
});