
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario

        // Mostrar el mensaje de confirmación
        confirmationMessage.textContent = 'Su mensaje se ha enviado con éxito. Espere a que nos contactemos con usted.';
        confirmationMessage.style.display = 'block';

        // Opcional: Limpiar el formulario después de mostrar el mensaje
        form.reset();
    });
});
