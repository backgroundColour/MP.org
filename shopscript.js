document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const cartButton = document.getElementById("cart-button");
    const cartPopover = document.getElementById("cart-popover");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    let cart = [];

    // Initialize the shop
    initializeShop();

    // Initialize the shop by setting up product prices and event listeners
    function initializeShop() {
        productCards.forEach(card => {
            setupProductPrice(card);
            setupAddToCartButton(card);
        });

        setupCartButton();
        setupCheckoutButton();
    }

    // Setup product price with random discounts or tariffs
    function setupProductPrice(card) {
        const priceElement = card.querySelector(".price");
        const basePrice = generateRandomPrice();
        const priceDetails = applyRandomDiscountOrTariff(basePrice);

        priceElement.innerHTML = priceDetails.displayPrice;
        card.dataset.basePrice = basePrice.toFixed(2);
        card.dataset.finalPrice = priceDetails.finalPrice.toFixed(2);
    }

    // Generate a random base price
    function generateRandomPrice() {
        return Math.random() * 100; // Random price between 0 and 100
    }

    // Apply a random discount or tariff to the base price
    function applyRandomDiscountOrTariff(basePrice) {
        if (Math.random() < 0.2) { // 20% chance to apply a discount or tariff
            const isDiscount = Math.random() < 0.5;
            const percentage = Math.random(); // 0.00 – 1.00
            const percentDisplay = Math.round(percentage * 100); // 0 – 100%
            const modifiedPrice = isDiscount
                ? basePrice * (1 - percentage)
                : basePrice * (1 + percentage);

            const displayPrice = `
                <span style="text-decoration: line-through; color: gray;">€${basePrice.toFixed(2)}</span><br>
                <span style="color: ${isDiscount ? 'green' : 'red'};">
                    ${isDiscount ? `Rabatt ${percentDisplay}%:` : `Tariff +${percentDisplay}%:`} €${modifiedPrice.toFixed(2)}
                </span>`;
            return { finalPrice: modifiedPrice, displayPrice };
        } else {
            return { finalPrice: basePrice, displayPrice: `€${basePrice.toFixed(2)}` };
        }
    }

    // Setup the "Add to Cart" button for a product
    function setupAddToCartButton(card) {
        const button = card.querySelector("button");
        const name = card.querySelector("h3").innerText;

        button.addEventListener("click", () => {
            const basePrice = parseFloat(card.dataset.basePrice);
            const finalPrice = parseFloat(card.dataset.finalPrice);

            const product = { name, basePrice, finalPrice };
            addToCart(product);
        });
    }

    // Add a product to the cart
    function addToCart(product) {
        cart.push(product);
        updateCartUI();
    }

    // Update the cart UI
    function updateCartUI() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.innerText = `${item.name} - €${item.finalPrice.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.finalPrice;
        });

        cartTotal.innerText = `Gesamt: €${total.toFixed(2)}`;
    }

    // Setup the cart button to toggle the popover
    function setupCartButton() {
        cartButton.addEventListener("click", () => {
            if (cartPopover.hasAttribute("popover")) {
                cartPopover.removeAttribute("popover");
            } else {
                cartPopover.setAttribute("popover", "auto");
            }
        });
    }

    // Setup the checkout button functionality
    function setupCheckoutButton() {
        checkoutButton.addEventListener("click", () => {
            alert("Zur Kasse gehen!");
            cart = [];
            updateCartUI();
            cartPopover.removeAttribute("popover");
        });
    }
});