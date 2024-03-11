let cartItems = [];

const addCarrinhoButtons = document.querySelectorAll('.addCarrinho');

addCarrinhoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productContainer = button.closest('.containerProducts');
        const productName = productContainer.querySelector('.nomeProduct').innerText;
        const productPrice = parseFloat(productContainer.querySelector('.preco').innerText.replace('R$ ', ''));

        const itemIndex = cartItems.findIndex(item => item.name === productName);

        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity++;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - R$ ${item.price.toFixed(2)} - Quantidade: ${item.quantity}`;
        cartItemsList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.innerText = `Total: R$ ${total.toFixed(2)}`;
}

const clearCartButton = document.getElementById('clear-cart');

clearCartButton.addEventListener('click', () => {
    cartItems = [];
    updateCart();
});