// script.js

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault();
          const productElement = event.target.closest('.producto');
          const productName = productElement.querySelector('h4').innerText;
          const productPrice = productElement.querySelector('p').innerText.replace('Precio: $', '');
          const productImage = productElement.querySelector('img').src;

          const product = {
              name: productName,
              price: productPrice,
              image: productImage
          };

          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
          alert('Producto añadido al carrito');
      });
  });
});
