    const cart = [];
        const cartIcon = document.getElementById('cart-icon');
        const cartCount = document.getElementById('cart-count');
        const cartModal = document.getElementById('cart-modal');
        const closeBtn = document.getElementsByClassName('close')[0];
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            updateCartCount();
            alert(`${productName} has been added to your cart!`);
        }

        function updateCartCount() {
            cartCount.textContent = cart.length;
        }

     function updateCartModal() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ₱${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})" class="remove-btn">❌</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;
}


        cartIcon.onclick = function() {
            updateCartModal();
            cartModal.style.display = 'block';
        }

        closeBtn.onclick = function() {
            cartModal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == cartModal) {
                cartModal.style.display = 'none';
            }
        }

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCartCount();
    updateCartModal();
}

 function toggleOnlineOptions(show) {
        const onlineOptions = document.getElementById('online-options');
        onlineOptions.style.display = show ? 'block' : 'none';
    }
