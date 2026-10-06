const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const total = document.getElementById("total");
const error = document.getElementById("error");
const calculateBtn = document.getElementById("calculateBtn");

// Function to calculate total price
function calculateTotal() {
    const product = productName.value.trim();
    const qty = Number(quantity.value);
    const itemPrice = Number(price.value);

    // Validation
    if (product === "") {
        error.textContent = "Please enter the product name.";
        total.textContent = "0.00";
        return;
    }

    if (qty <= 0 || isNaN(qty)) {
        error.textContent = "Quantity must be greater than 0.";
        total.textContent = "0.00";
        return;
    }

    if (itemPrice < 0 || isNaN(itemPrice)) {
        error.textContent = "Price cannot be negative.";
        total.textContent = "0.00";
        return;
    }

    error.textContent = "";

    const result = qty * itemPrice;

    total.textContent = result.toFixed(2);
}

// Button event
calculateBtn.addEventListener("click", calculateTotal);

// Calculate automatically whenever quantity changes
quantity.addEventListener("input", calculateTotal);

// Calculate automatically whenever price changes
price.addEventListener("input", calculateTotal);
