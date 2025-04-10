document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", function () {
        const productCards = document.querySelectorAll(".product-card");
        const cartButton = document.getElementById("cart-button");
        const cartPopover = document.getElementById("cart-popover");
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const checkoutButton = document.getElementById("checkout-button");
    
        let cart = [];
    
        // Initialize Popover API
        const popover = new Popover(cartButton, {
            content: cartPopover,
            placement: "bottom",
        });
    
        // Parse product details and add to cart
        productCards.forEach(card => {
            const name = card.querySelector("h3").innerText;
            const priceElement = card.querySelector(".price");
            const button = card.querySelector("button");
    
            button.addEventListener("click", () => {
                const priceText = priceElement.innerHTML;
                const basePriceMatch = priceText.match(/€(\d+(\.\d+)?)/);
                const tariffPriceMatch = priceText.match(/€(\d+(\.\d+)?)/g)?.[1];
    
                const basePrice = basePriceMatch ? parseFloat(basePriceMatch[1]) : 0;
                const tariffPrice = tariffPriceMatch ? parseFloat(tariffPriceMatch) : basePrice;
    
                const product = {
                    name,
                    basePrice,
                    tariffPrice,
                };
    
                addToCart(product);
            });
        });
    
        // Add product to cart
        function addToCart(product) {
            cart.push(product);
            updateCartUI();
        }
    
        // Update cart UI
        function updateCartUI() {
            cartItems.innerHTML = "";
            let total = 0;
    
            cart.forEach(item => {
                const li = document.createElement("li");
                li.innerText = `${item.name} - €${item.tariffPrice.toFixed(2)}`;
                cartItems.appendChild(li);
                total += item.tariffPrice;
            });
    
            cartTotal.innerText = `Gesamt: €${total.toFixed(2)}`;
        }
    
        // Toggle cart popover
        cartButton.addEventListener("click", () => {
            const isVisible = cartPopover.hidden;
            cartPopover.hidden = !isVisible;
            cartButton.setAttribute("aria-expanded", isVisible);
        });
    
        // Checkout button functionality
        checkoutButton.addEventListener("click", () => {
            alert("Zur Kasse gehen!");
            cart = [];
            updateCartUI();
            cartPopover.hidden = true;
            cartButton.setAttribute("aria-expanded", "false");
        });
    });
}
);
//Tariffs can be applied to the total price
//<span style="color: red;">
//Tariff +59%: €8.63
//</span>
