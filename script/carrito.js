// carrito.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productsContainer = document.getElementById('products');
    const totalContainer = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');

    let total = 0;

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 50px;">
            <span>${product.name}</span>
            <span>$${product.price}</span>
        `;
        productsContainer.appendChild(productElement);

        total += parseFloat(product.price);
    });

    totalContainer.innerHTML = `Total: $${total.toFixed(0)}`;

    // Evento para finalizar compra
    checkoutButton.addEventListener('click', () => {
        localStorage.removeItem('cart'); // Vaciar el carrito
        window.location.href = '../pages/pprincipal.html'; // Redirigir a la página de confirmación o inicio
    });
});
