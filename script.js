document.querySelectorAll('.product-images img').forEach(img => {
    img.addEventListener('click', function() {
        document.querySelector('.product-main-image img').src = this.src;
    });
});
