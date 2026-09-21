document.addEventListener("DOMContentLoaded", function () {

    const productName =
        document.getElementById("productName");

    const productPrice =
        document.getElementById("productPrice");

    const productQuantity =
        document.getElementById("productQuantity");

    const summaryName =
        document.getElementById("summaryName");

    const summaryPrice =
        document.getElementById("summaryPrice");

    const summaryQuantity =
        document.getElementById("summaryQuantity");

    const summarySubtotal =
        document.getElementById("summarySubtotal");

    const summaryTax =
        document.getElementById("summaryTax");

    const summaryTotal =
        document.getElementById("summaryTotal");

    const statusText =
        document.getElementById("statusText");


    function calculateTotal() {

        const name = productName.value;
        const price = parseFloat(productPrice.value);
        const quantity = parseInt(productQuantity.value);

        const subtotal = price * quantity;

        const tax = subtotal * 0.18;

        const total = subtotal + tax;


        summaryName.textContent = name;

        summaryPrice.textContent =
            "₹" + price.toFixed(2);

        summaryQuantity.textContent =
            quantity;

        summarySubtotal.textContent =
            "₹" + subtotal.toFixed(2);

        summaryTax.textContent =
            "₹" + tax.toFixed(2);

        summaryTotal.textContent =
            "₹" + total.toFixed(2);

        statusText.textContent =
            "Dynamically Calculated (No Page Reload)";
    }


    productName.addEventListener(
        "input",
        calculateTotal
    );

    productPrice.addEventListener(
        "input",
        calculateTotal
    );

    productQuantity.addEventListener(
        "input",
        calculateTotal
    );


    document.querySelectorAll(".preset-btn")
        .forEach(function (button) {

        button.addEventListener("click", function () {

            productName.value =
                button.dataset.name;

            productPrice.value =
                button.dataset.price;

            productQuantity.value =
                button.dataset.qty;

            calculateTotal();

        });

    });


    document.getElementById("resetBtn")
        .addEventListener("click", function () {

        productName.value =
            "Wireless Gaming Mouse";

        productPrice.value =
            "1499.00";

        productQuantity.value =
            "2";

        calculateTotal();

    });


    calculateTotal();

});