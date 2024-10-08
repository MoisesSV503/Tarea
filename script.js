const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.05)';   

    });

    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)';
    });
});
