document.addEventListener("DOMContentLoaded", () => {
    // URI parameters
    const urlParams = new URLSearchParams(window.location.search);
    var total = 0;
    var cart = [];
    urlParams.has("total") ? total = urlParams.get("total") : null;
    urlParams.has("cart") ? cart = JSON.parse(urlParams.get("cart")) : null;

    // Elements
    const cartItems = document.querySelector("#cart-items");
    const cartTotal = document.querySelector("#total");

    // Display the cart items
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} (x${item.quantity}) - €${(item.finalPrice * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.finalPrice * item.quantity;
    });
    // Display the total
    cartTotal.innerText = total;
});


