document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los botones de "Añadir al Carrito"
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  // Iterar sobre cada botón y añadir un evento de clic
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Obtener el producto correspondiente al botón clicado
          const producto = button.parentElement;
          const nombre = producto.querySelector('h4').innerText;
          const precio = producto.querySelector('p:nth-child(4)').innerText.replace('Precio: $', '');
          const imagen = producto.querySelector('img').src;

          // Crear un objeto con la información del producto
          const productoObj = {
              nombre: nombre,
              precio: parseFloat(precio),
              imagen: imagen,
              cantidad: 1 // Inicialmente la cantidad es 1
          };

          // Obtener el carrito del LocalStorage
          let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

          // Verificar si el producto ya está en el carrito
          const productoExistente = carrito.find(item => item.nombre === productoObj.nombre);
          
          if (productoExistente) {
              // Si el producto ya está en el carrito, incrementar la cantidad
              productoExistente.cantidad++;
          } else {
              // Si el producto no está en el carrito, añadirlo
              carrito.push(productoObj);
          }

          // Guardar el carrito actualizado en el LocalStorage
          localStorage.setItem('carrito', JSON.stringify(carrito));

          // Actualizar la vista previa del carrito (si es necesario)
          actualizarVistaPreviaCarrito(carrito);
      });
  });
});

function actualizarVistaPreviaCarrito(carrito) {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Limpiar el contenido actual
  cartItemsContainer.innerHTML = '';

  // Calcular el nuevo total
  let total = 0;

  // Iterar sobre los productos en el carrito y agregarlos a la vista previa
  carrito.forEach(producto => {
      const item = document.createElement('div');
      item.classList.add('cart-item');
      item.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <div>
              <h4>${producto.nombre}</h4>
              <p>Precio: $${producto.precio}</p>
              <p>Cantidad: ${producto.cantidad}</p>
          </div>
      `;
      cartItemsContainer.appendChild(item);

      total += producto.precio * producto.cantidad;
  });

  // Actualizar el total en la vista previa
  cartTotal.innerText = total.toFixed(2);
}
