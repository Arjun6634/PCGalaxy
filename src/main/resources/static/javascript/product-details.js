// Sample product data (the same data used in the main product page)
const products = [
    { id: 1, name: "DELL INSPIRON 15-3520", price: 35300, originalPrice: 65053, brand: "DELL", processor: "Intel Core i5", memorySize: "16 GB", storageSize: "1 TB", image: "../static/image/1-250x250_1 copy.jpg", hoverImage: "../static/image/2-250x250_4 copy.jpg", description: "Powerful laptop for work and gaming." },
    { id: 2, name: "HP PAVILION 15", price: 67300, originalPrice: 85965, brand: "HP", processor: "Intel Core i7", memorySize: "32 GB", storageSize: "2 TB", image: "../static/image/2-250x250w_3 copy.jpg", hoverImage: "../static/image/3-250x250w_2 copy.jpg", description: "High-performance HP laptop." },
    // Add more products
];

// Function to get the product ID from the URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Function to display product details on the page
function displayProductDetails() {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('mainProductImage').src = product.image;
        document.getElementById('productPrice').innerHTML = `₹${product.price} <span class="old-price">₹${product.originalPrice}</span>`;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productSpecs').innerHTML = `
            <li>Brand: ${product.brand}</li>
            <li>Processor: ${product.processor}</li>
            <li>Memory: ${product.memorySize}</li>
            <li>Storage: ${product.storageSize}</li>
        `;
    } else {
        document.getElementById('productDetailsContainer').innerHTML = "<p>Product not found</p>";
    }
}

// Call the function when the page loads
window.onload = displayProductDetails;
