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


/* document.addEventListener('DOMContentLoaded', () => {
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

 */

/* document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            mostrarProductos(data);
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';

    productos.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';

        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        `;

        contenedor.appendChild(productoCard);
    });
}

function agregarAlCarrito(idProducto) {
    console.log(`Producto con ID ${idProducto} añadido al carrito.`);
    // Aquí iría la lógica para agregar el producto al carrito
}

function filtrarProductos(filtro) {
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            const productosFiltrados = productos.filter(producto => producto.categoria === filtro);
            mostrarProductos(productosFiltrados);
        })
        .catch(error => console.error('Error al filtrar los productos:', error));
}

















document.addEventListener('DOMContentLoaded', () => {
    const favoritosList = document.getElementById('favoritos-list');
    const productosContainer = document.getElementById('productos');

    // Obtener productos del localStorage o del JSON
    const productos = [
        {
            "productos": {
              "cerveza": [
                {
                  "nombre": "Cerveza Belga Blanche de Charleroi",
                  "descripcion": "Botella 330 ml",
                  "precio": 28,
                  "imagen": "./Img/cerveza1.png"
                },
                {
                  "nombre": "Cerveza Belga Gulden Draak Classic",
                  "descripcion": "Botella 330 ml",
                  "precio": 24,
                  "imagen": "./Img/cerveza2.png"
                },
                {
                  "nombre": "Cerveza Belga Chimay Red",
                  "descripcion": "Botella 750 ml",
                  "precio": 60,
                  "imagen": "./Img/cerveza3.png"
                },
                {
                  "nombre": "Cerveza Delirium Tremens",
                  "descripcion": "Botella 330 ml",
                  "precio": 26,
                  "imagen": "./Img/cerveza4.png"
                },
                {
                  "nombre": "Cerveza Gulden Draak Brewmaster",
                  "descripcion": "Botella 750 ml",
                  "precio": 70,
                  "imagen": "./Img/cerveza5.png"
                },
                {
                  "nombre": "Cerveza St Idesbald Blond",
                  "descripcion": "Botella 330 ml",
                  "precio": 20,
                  "imagen": "./Img/cerveza6.png"
                },
                {
                  "nombre": "Cerveza Inglesa Adnams Ghost Ship",
                  "descripcion": "Botella 500 ml",
                  "precio": 22,
                  "imagen": "./Img/cerveza7.png"
                },
                {
                  "nombre": "Cerveza Belga Abbaye D’Aulne Brune 6º",
                  "descripcion": "Botella 750 ml",
                  "precio": 46,
                  "imagen": "./Img/cerveza8.png"
                }
              ],
              "vino": [
                {
                  "nombre": "Vino Tinto Igneo",
                  "descripcion": "Botella 750 ml",
                  "precio": 406,
                  "imagen": "./Img/vino1.png"
                },
                {
                  "nombre": "Vino Blanco Santiago Ruiz",
                  "descripcion": "Botella 750 ml",
                  "precio": 212,
                  "imagen": "./Img/vino2.png"
                },
                {
                  "nombre": "Vino Rosado Portillo Rose",
                  "descripcion": "Botella 750 ml",
                  "precio": 64,
                  "imagen": "./Img/vino3.png"
                },
                {
                  "nombre": "Vino Mouton Cadet Rouge Kosher",
                  "descripcion": "Botella 750 ml",
                  "precio": 147,
                  "imagen": "./Img/vino4.png"
                }
              ],
              "ron": [
                {
                  "nombre": "RON ZACAPA 23 AÑOS",
                  "descripcion": "Botella 750 ml",
                  "precio": 264,
                  "imagen": "./Img/ron1.png"
                },
                {
                  "nombre": "Ron Quimbaya Artesanal",
                  "descripcion": "Botella 700 ml",
                  "precio": 245,
                  "imagen": "./Img/ron2.png"
                },
                {
                  "nombre": "RON ZACAPA CENTENARIO AMBAR",
                  "descripcion": "Botella 750 ml",
                  "precio": 120,
                  "imagen": "./Img/ron3.png"
                },
                {
                  "nombre": "Ron Havana Añejo 7 Años",
                  "descripcion": "Botella 750 ml",
                  "precio": 103,
                  "imagen": "./Img/ron4.png"
                },
                {
                  "nombre": "Ron Havana Club Añejo Especial",
                  "descripcion": "Botella 750 ml",
                  "precio": 71,
                  "imagen": "./Img/ron5.png"
                },
                {
                  "nombre": "RON QUIMBAYA GOLD",
                  "descripcion": "Botella 700 ml",
                  "precio": 61,
                  "imagen": "./Img/ron6.png"
                },
                {
                  "nombre": "RON QUIMBAYA GOLD",
                  "descripcion": "Botella 375 ml",
                  "precio": 34,
                  "imagen": "./Img/ron7.png"
                },
                {
                  "nombre": "RON PAMPERO AÑEJO ANIVERSARIO",
                  "descripcion": "Botella 750 ml",
                  "precio": 210,
                  "imagen": "./Img/ron8.png"
                }
              ],
              "tequila": [
                {
                  "nombre": "Olmeca Altos Plata Tequila",
                  "descripcion": "Botella 700 ml",
                  "precio": 182,
                  "imagen": "./Img/tequila1.png"
                },
                {
                  "nombre": "Olmeca Reposado 35° Tequila",
                  "descripcion": "Botella 700 ml",
                  "precio": 77,
                  "imagen": "./Img/tequila2.png"
                },
                {
                  "nombre": "TEQUILA DON JULIO BLANCO",
                  "descripcion": "Botella 750 ml",
                  "estado": "agotado",
                  "imagen": "./Img/tequila3.png"
                }
              ],
              "whisky": [
                {
                  "nombre": "WHISKY SINGLETON OF DUFFTOWN",
                  "descripcion": "Botella 750 ml",
                  "precio": 457,
                  "imagen": "./Img/whisky1.png"
                },
                {
                  "nombre": "WHISKY OLD PARR 18 AÑOS",
                  "descripcion": "Botella 750 ml",
                  "precio": 332,
                  "imagen": "./Img/whisky2.png"
                },
                {
                  "nombre": "WHISKY JOHNNIE WALKER DOUBLE",
                  "descripcion": "Botella 750 ml",
                  "precio": 173,
                  "imagen": "./Img/whisky3.png"
                },
                {
                  "nombre": "WHISKY OLD PARR 12 AÑOS",
                  "descripcion": "Botella 750 ml",
                  "estado": "agotado",
                  "imagen": "./Img/whisky4.png"
                }
              ],
              "vodka": [
                {
                  "nombre": "VODKA KETEL ONE X750ML",
                  "descripcion": "Botella 750 ml",
                  "precio": 163,
                  "imagen": "./Img/vodka1.png"
                },
                {
                  "nombre": "Vodka Absolut",
                  "descripcion": "Botella 700 ml",
                  "precio": 85,
                  "imagen": "./Img/vodka2.png"
                }
              ],
              "mezcal": [
                {
                  "nombre": "Mezcal Los Nahuales",
                  "descripcion": "Botella 700 ml",
                  "precio": 387,
                  "imagen": "./Img/mezcal1.png"
                },
                {
                  "nombre": "Mezcal Alipús Santa Ana Del Río",
                  "descripcion": "Botella 700 ml",
                  "precio": 365,
                  "imagen": "./Img/mezcal2.png"
                },
                {
                  "nombre": "Mezcal Alipús San Luis",
                  "descripcion": "Botella 700 ml",
                  "precio": 365,
                  "imagen": "./Img/mezcal3.png"
                }
              ],
              "ginebra": [
                {
                  "nombre": "Ginebra Beefeater 24°",
                  "descripcion": "Botella 700 ml",
                  "precio": 204,
                  "imagen": "./Img/ginebra1.png"
                },
                {
                  "nombre": "GINEBRA TANQUERAY RANGPUR",
                  "descripcion": "Botella 750 ml",
                  "precio": 158,
                  "imagen": "./Img/ginebra2.png"
                },
                {
                  "nombre": "GINEBRA GORDON'S DRY GIN",
                  "descripcion": "Botella 750 ml",
                  "estado": "agotado",
                  "imagen": "./Img/ginebra3.png"
                }
              ]
            }
          }
    ];

    // Obtener favoritos del localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Función para renderizar productos
    function renderProductos() {
        productosContainer.innerHTML = ''; // Limpiar productos existentes
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <button class="add-to-favorites" data-id="${producto.id}">Add to Favorites</button>
            `;
            productosContainer.appendChild(productoDiv);
        });
        attachFavoritoEvents();
    }

    // Función para renderizar favoritos
    function renderFavoritos() {
        favoritosList.innerHTML = ''; // Limpiar favoritos existentes
        favoritos.forEach(favorito => {
            const favoritoDiv = document.createElement('div');
            favoritoDiv.classList.add('favorito');
            favoritoDiv.innerHTML = `
                <img src="${favorito.imagen}" alt="${favorito.nombre}">
                <h3>${favorito.nombre}</h3>
            `;
            favoritosList.appendChild(favoritoDiv);
        });
    }

    // Función para añadir a favoritos
    function addToFavoritos(producto) {
        if (!favoritos.some(fav => fav.id === producto.id)) {
            favoritos.push(producto);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            renderFavoritos();
        }
    }

    // Función para manejar el evento de clic en el botón "Add to Favorites"
    function attachFavoritoEvents() {
        document.querySelectorAll('.add-to-favorites').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const producto = productos.find(prod => prod.id === id);
                if (producto) {
                    addToFavoritos(producto);
                }
            });
        });
    }

    // Renderizar productos y favoritos al cargar
    renderProductos();
    renderFavoritos();
});
 */