document.addEventListener("DOMContentLoaded", () => {
    // URI parameters
    const urlParams = new URLSearchParams(window.location.search);
    var total = 0;
    var cart = [];
    urlParams.has("total") ? total = urlParams.get("total") : null;
    urlParams.has("cart") ? cart = JSON.parse(urlParams.get("cart")) : null;

    console.log(cart);
    console.log(total);
});