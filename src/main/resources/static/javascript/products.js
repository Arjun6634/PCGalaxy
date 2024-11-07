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





function toggleSitemap() {
    var sitemap = document.getElementById("sitemap-categories");
    sitemap.style.display = (sitemap.style.display === "none") ? "block" : "none";
}




// Sample array of product data
const products = [
    { id: 1, name: "DELL INSPIRON 15-3520 [CI3-1215U 12TH GEN/8GB DDR4/512GB SSD/WI]", price: 35300, originalPrice: 65053, brand: "DELL", processor: "Intel Core i5", gpu: "RTX 3050", memorySize: "16 GB", storageSize: "1 TB", image: "../static/image/1-250x250_1 copy.jpg", hoverImage: "../static/image/2-250x250_4 copy.jpg", rating: 4 },
    { id: 2, name: "DELL INSPIRON 15-3520 [CI3-1215U 12TH GEN/8GB DDR4/512GB SSD/WIN", price: 37800, originalPrice: 68053, brand: "DELL", processor: "Intel Core i3", gpu: "Intel UHD Graphics", memorySize: "8 GB", storageSize: "2 TB", image: "../static/image/1-250x250_3 copy.jpg", hoverImage: "../static/image/5-250x250_2 copy.jpg", rating: 5 },
    { id: 3, name: "MSI 15 A12UCX 265IN CYBORG [CI5-12450H 12TH GEN/8GB DDR4/512GB SSD/WIN11 HOME]", price: 51800, originalPrice: 86990, brand: "MSI", processor: "Intel Core i7", gpu: "RTX 3050 TI", memorySize: "16 GB", storageSize: "512 GB", image: "../static/image/1-250x250 copy.jpg", hoverImage: "../static/image/2-250x250_2 copy.jpg", rating: 3 },
    { id: 4, name: "HP PAVILION 15-EG3027TU [CI5-1340P 13TH GEN/16GB DDR5/512GB SSD/WIN11]", price: 67300, originalPrice: 85965, brand: "HP", processor: "Intel Core i9", gpu: "RTX 4060", memorySize: "32 GB", storageSize: "1 TB", image: "../static/image/1-250x250w_3 copy.jpg", hoverImage: "../static/image/2-250x250w_2 copy.jpg", rating: 5 },
    { id: 5, name: "HP PAV 14-DV2014TU [CI5-1235U 12TH GEN/16GB DDR4/512GB SSD/NO DVD/WIN11 HOME]", price: 57800, originalPrice: 75990, brand: "HP", processor: "Intel Core i5", gpu: "RTX 3050", memorySize: "16 GB", storageSize: "1 TB", image: "../static/image/dv2014tu-01-250x250.jpg", hoverImage: "../static/image/dv2014tu-04-250x250.jpg", rating: 4 },
    { id: 6, name: "HP 15-FD0018TU [CI3-1315U 13TH GEN/8GB DDR4/512GB SSD/WIN11 HOME]", price: 46800, originalPrice: 52273, brand: "HP", processor: "AMD Ryzen 5", gpu: "RTX 3080 TI", memorySize: "32 GB", storageSize: "2 TB", image: "../static/image/1-250x250w copy.jpg", hoverImage: "../static/image/2-250x250w copy.jpg", rating: 5 },
    { id: 7, name: "MSI GS66 11UH [CI7-11800H 11TH GEN/16GB DDR4/2TB SSD/NO DVD/WIN10 HOME]", price: 201300, originalPrice: 299000, brand: "MSI", processor: "Intel Core i7", gpu: "RTX 3050 TI", memorySize: "16 GB", storageSize: "512 GB", image: "../static/image/1024-250x250w.jpg", hoverImage: "../static/image/1024(2)-500x500w.jpg", rating: 3 },
    { id: 8, name: "MSI GS66 10UE [CI7-10870H 10TH GEN/16GB DDR4/1TB SSD/NO DVD/WIN10 HOME]", price: 130800, originalPrice: 223990, brand: "MSI", processor: "Intel Core i9", gpu: "RTX 4060", memorySize: "32 GB", storageSize: "1 TB", image: "../static/image/1-250x250w_4 copy.jpg", hoverImage: "../static/image/5-250x250w copy.jpg", rating: 5 },
    // Add more products as needed
];

// Function to generate star ratings based on rating value
function generateRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `
            <span class="star ${i <= rating ? 'filled' : ''}">★</span>
        `;
    }
    return stars;
}

// Function to format the price with commas
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Render products dynamically
function displayProducts(filteredProducts) {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = ""; // Clear existing products

    filteredProducts.forEach(product => {
        const discount = ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0); // Calculate discount percentage

        const productItem = `
            <div class="product-card">
                <div class="offer-tag">${discount}% OFF</div>
                <a href="wishlist.html" class="wishlist-btn">&#x2764;</a>

                <div class="product-image-container">
                    <!-- Link the product image to the details page with product ID -->
                    <a href="../templates/product-details.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}" class="product-image first-image">
                        <img src="${product.hoverImage}" alt="${product.name}" class="product-image second-image"> <!-- Ensure proper class for hover -->
                    </a>
                </div>

                <!-- Link the product name to the details page with product ID -->
                <a href="../templates/product-details.html?id=${product.id}" class="product-name">${product.name}</a>

                <div class="ratings">
                    ${generateRatingStars(product.rating)} <!-- Dynamic star ratings -->
                </div>

                <div class="product-price">
                    ₹${formatPrice(product.price)} <span class="old-price">₹${formatPrice(product.originalPrice)}</span>
                </div>

                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        productGrid.innerHTML += productItem;
    });
}

// Initially display all products
displayProducts(products);

// Price filter logic
const priceRange = document.getElementById('price-range');
const minPriceDisplay = document.getElementById('min-price');
const maxPriceDisplay = document.getElementById('max-price');

priceRange.addEventListener('input', () => {
    const selectedPrice = priceRange.value;

    // Update the displayed max price
    maxPriceDisplay.textContent = formatPrice(selectedPrice);

    // Filter products based on the price range
    const filteredProducts = products.filter(product => product.price >= 29915 && product.price <= selectedPrice);

    // Display filtered products
    displayProducts(filteredProducts);
});


 // Filter logic
 document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedBrands = Array.from(document.querySelectorAll('input[value^="DELL"]:checked, input[value^="MSI"]:checked, input[value^="HP"]:checked, input[value^="ASUS"]:checked, input[value^="SAMSONG"]:checked')).map(input => input.value);
                const selectedProcessors = Array.from(document.querySelectorAll('input[value^="Intel Core"]:checked, input[value^="AMD Ryzen"]:checked, input[value^="Intel Core i3"]:checked')).map(input => input.value);
                const selectedGPUs = Array.from(document.querySelectorAll('input[value^="RTX"]:checked, input[value^="Intel UHD Graphics"]:checked')).map(input => input.value);
                const selectedPlatforms = Array.from(document.querySelectorAll('input[value^="AMD RYZEN"]:checked')).map(input => input.value);
                const selectedMemoryTypes = Array.from(document.querySelectorAll('input[value^="DDR"]:checked')).map(input => input.value);
                const selectedOS = Array.from(document.querySelectorAll('input[value^="Windows"]:checked')).map(input => input.value);
                const selectedScreenSizes = Array.from(document.querySelectorAll('input[value$="inch"]:checked')).map(input => input.value);
                const selectedStorageTypes = Array.from(document.querySelectorAll('input[value^="SSD"]:checked')).map(input => input.value);
                const selectedMemorySizes = Array.from(document.querySelectorAll('input[value$="GB"]:checked')).map(input => input.value);
                const selectedStorageSizes = Array.from(document.querySelectorAll('input[value$="GB"]:checked, input[value$="TB"]:checked')).map(input => input.value);
        
                // Filter products based on the selected filters
                const filteredProducts = products.filter(product =>
                    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
                    (selectedProcessors.length === 0 || selectedProcessors.includes(product.processor)) &&
                    (selectedPlatforms.length === 0 || selectedPlatforms.includes(product.processor)) &&
                    (selectedMemoryTypes.length === 0 || selectedMemoryTypes.includes(product.memoryType)) &&
                    (selectedGPUs.length === 0 || selectedGPUs.includes(product.gpu)) &&
                    (selectedOS.length === 0 || selectedOS.includes(product.os)) &&
                    (selectedScreenSizes.length === 0 || selectedScreenSizes.includes(product.screenSize)) &&
                    (selectedStorageTypes.length === 0 || selectedStorageTypes.includes(product.storageType)) &&
                    (selectedMemorySizes.length === 0 || selectedMemorySizes.includes(product.memorySize)) &&
                    (selectedStorageSizes.length === 0 || selectedStorageSizes.includes(product.storageSize))
                );
        

            
                displayProducts(filteredProducts);
            });
        });


