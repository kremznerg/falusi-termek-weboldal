const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const product = document.getElementById("productType");
    const message = document.getElementById("message");
    const gdpr = document.getElementById("gdpr");

    let errors = [];

    if (name.value.trim() === "") {
        errors.push("A név megadása kötelező.");
    }

    if (email.value.trim() === "") {
        errors.push("Az e-mail megadása kötelező.");
    } else if (!validateEmail(email.value.trim())) {
        errors.push("Hibás e-mail formátum.");
    }

    if (product.value === "") {
        errors.push("Válassza ki az érdeklődés tárgyát.");
    }

    if (message.value.trim() === "") {
        errors.push("Az üzenet nem lehet üres.");
    }

    if (!gdpr.checked) {
        errors.push("El kell fogadni az adatkezelési tájékoztatót.");
    }

    if (errors.length > 0) {
        alertBox.innerHTML = `
            <div class="alert alert-danger">
                ${errors.join("<br>")}
            </div>
        `;
    } else {
        alertBox.innerHTML = `
            <div class="alert alert-success">
                Köszönjük! Üzeneted sikeresen elküldtük.
            </div>
        `;
        form.reset();
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
