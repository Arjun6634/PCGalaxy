$(document).ready(function(){
    $('.product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Wishlist click event
    $('.wishlist-heart').on('click', function(){
        $(this).toggleClass('active');
        const productId = $(this).data('product-id');
        if ($(this).hasClass('active')) {
            // Navigate to wishlist page or add to wishlist
            window.location.href = `wishlist.html?addProduct=${productId}`;
        }
    });

    // Add to cart click event
    $('.add-to-cart').on('click', function(){
        const productName = $(this).closest('.product-card').find('h3').text();
        alert(`${productName} added to cart!`);
        // Navigate to cart or perform cart addition logic
        window.location.href = `cart.html?addProduct=${productName}`;
    });

    // Product detail page navigation
    $('.product-card').on('click', function() {
        const productId = $(this).find('.wishlist-heart').data('product-id');
        window.location.href = `product-detail.html?id=${productId}`;
    });
});
