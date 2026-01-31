const header = document.querySelector("#main-header");

window.addEventListener("scroll", function() {
    // If user scrolls down more than 50 pixels...
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        // If they are at the top, remove the class
        header.classList.remove("sticky");
    }
});


// 1. Select all buttons and all cards
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".menu-grid .product-card");

// 2. Add a "click" event to every button
filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
        // A. Remove "active" style from the old button
        document.querySelector(".filter-btn.active").classList.remove("active");
        
        // B. Add "active" style to the button we just clicked
        e.target.classList.add("active");

        // C. Get the filter value (e.g., "cakes" or "all")
        const filterValue = e.target.getAttribute("data-filter");

        // D. Loop through all cards and hide/show them
        productCards.forEach((card) => {
            // Get the category of the current card
            const cardCategory = card.getAttribute("data-category");

            if (filterValue === "all" || filterValue === cardCategory) {
                // Show the card
                card.classList.remove("hide");
                card.classList.add("show");
            } else {
                // Hide the card
                card.classList.add("hide");
                card.classList.remove("show");
            }
        });
    });
});

const mobileToggle = document.querySelector(".mobile-toggle");
const mobileClose = document.querySelector(".mobile-close");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-link");

// 1. Open Menu
mobileToggle.addEventListener("click", () => {
    nav.classList.add("active");
});

// 2. Close Menu (Clicking X)
mobileClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

// 3. Close Menu (Clicking a Link)
// It's annoying if you click "Menu" and the drawer stays open covering the screen.
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});