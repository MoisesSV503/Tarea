// Animación de desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de aparición para los productos
const products = document.querySelectorAll('.product');

function revealProducts() {
    products.forEach(product => {
        const windowHeight = window.innerHeight;
        const productTop = product.getBoundingClientRect().top;
        const revealPoint = 150;

        if (productTop < windowHeight - revealPoint) {
            product.classList.add('active');
        } 
    });
}

window.addEventListener('scroll', revealProducts);
revealProducts(); // Mostrar
