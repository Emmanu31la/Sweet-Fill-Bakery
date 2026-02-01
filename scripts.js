/* ==============================================
   FEATURE: SMART NAVBAR (Hide on Down, Show on Up)
   ============================================== */
const header = document.querySelector("#main-header");
let lastScrollTop = 0; // Tracks the last position

window.addEventListener("scroll", function() {
    // 1. Get current scroll position
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // 2. Logic for Sticky Background (Solid Pink Shadow)
    if (currentScroll > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    // 3. Logic for Hiding/Showing based on Direction
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // SCROLLING DOWN -> Hide Header
        header.classList.add("scroll-hide");
    } else {
        // SCROLLING UP -> Show Header
        header.classList.remove("scroll-hide");
    }
    
    // 4. Update the "last" position for the next check
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


/* ==============================================
   FEATURE: MENU FILTERING
   ============================================== */
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".menu-grid .product-card");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Remove active class from others
        document.querySelector(".filter-btn.active").classList.remove("active");
        // Add active to clicked
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");

        productCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");
            if (filterValue === "all" || filterValue === cardCategory) {
                card.classList.remove("hide");
                card.classList.add("show");
            } else {
                card.classList.add("hide");
                card.classList.remove("show");
            }
        });
    });
});


/* ==============================================
   FEATURE: MOBILE MENU
   ============================================== */
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileClose = document.querySelector(".mobile-close");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a"); // Fixed selector

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (mobileClose) {
    mobileClose.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* ==============================================
   FEATURE: ACTIVE LINK SCROLL SPY
   ============================================== */
let sections = document.querySelectorAll('section');
let scrollSpyLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Trigger highlight slightly before the section hits top
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    scrollSpyLinks.forEach(link => {
        link.classList.remove('active-link');
        // Check if href contains the current section id
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active-link');
        }
    });
});