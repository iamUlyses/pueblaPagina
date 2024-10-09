document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        wrap: true
    });
});