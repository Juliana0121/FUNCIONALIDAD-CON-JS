document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.producto').querySelector('h4').innerText;
            const productPrice = parseFloat(this.closest('.producto').querySelector('p').innerText.replace('Precio: $', ''));

            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }
            updateCartPreview();
        });
    });

    function updateCartPreview() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - $${item.price} x ${item.quantity}</p>`;
            cartItems.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartTotal.innerText = total.toFixed(2);
    }
});
