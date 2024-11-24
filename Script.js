document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada para las características
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        setTimeout(() => {
            feature.style.transition = 'all 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Formulario de contacto
    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        response.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
        response.style.color = 'green';
        form.reset();
    });

    // Botón de scroll hacia arriba
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-top';
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        scrollButton.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
});
