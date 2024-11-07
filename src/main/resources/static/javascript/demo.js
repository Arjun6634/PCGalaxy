// Show the categories dropdown when button is clicked
function showCategories() {
    document.getElementById('categoriesDropdown').style.display = 'block';
}

// Hide the categories dropdown when close button is clicked
function hideCategories() {
    document.getElementById('categoriesDropdown').style.display = 'none';
}


// Function to show product details
function viewProductDetails(productId) {
alert('View Product Details for Product ID: ' + productId);
// Navigate to the product details page here
}

// Function to add a product to wishlist
function addToWishlist(productId) {
alert('Added to Wishlist: Product ID ' + productId);
// Implement add to wishlist functionality here
}



    // Function to initialize sliders for multiple sections
function initializeSlider(sliderId, prevBtnId, nextBtnId) {
    const slider = document.getElementById(sliderId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    let scrollAmount = 0;
    let autoSlideInterval;

    // Function to slide the slider to the next product
    function slideNext() {
        scrollAmount += 250; // Adjust based on product width
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0; // Reset to beginning when reaching end
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Function to slide the slider to the previous product
    function slidePrev() {
        scrollAmount -= 250;
        if (scrollAmount < 0) {
            scrollAmount = slider.scrollWidth - slider.clientWidth; // Jump to the end when scrolling back before start
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Start auto-slide every 3 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(slideNext, 3000);
    }

    // Stop auto-slide on user interaction
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Add event listeners for prev and next buttons
    prevBtn.addEventListener('click', function () {
        stopAutoSlide(); // Stop auto-slide on interaction
        slidePrev();
    });

    nextBtn.addEventListener('click', function () {
        stopAutoSlide(); // Stop auto-slide on interaction
        slideNext();
    });

    // Stop auto-slide on hover, resume on mouse out
    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);

    // Start auto-sliding initially
    startAutoSlide();
}

// Initialize sliders for multiple sections
initializeSlider('new-arrivals-slider', 'new-arrivals-prev', 'new-arrivals-next');
initializeSlider('best-sellers-slider', 'best-sellers-prev', 'best-sellers-next');
initializeSlider('Monitors-slider', 'Monitors-prev', 'Monitors-next');

function toggleSitemap() {
    var sitemap = document.getElementById("sitemap-categories");
    sitemap.style.display = (sitemap.style.display === "none") ? "block" : "none";
}