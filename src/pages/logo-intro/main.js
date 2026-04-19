document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-container');

    // Esperamos un segundo para darle mas impacto visual al inicio
    setTimeout(() => {
        // Al añadir la clase 'reveal', el CSS se encarga del efecto de mascara
        logo.classList.add('reveal');
        console.log('Intro animation started!');
    }, 1000);

    // Opcional: Si quieres que algo pase despues de que el logo termine de aparecer (1.4s)
    setTimeout(() => {
        console.log('Intro animation finished.');
    }, 2400); // 1s de espera + 1.4s de animacion
});
