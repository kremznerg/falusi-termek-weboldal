const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const product = document.getElementById("productType");
    const message = document.getElementById("message");
    const gdpr = document.getElementById("gdpr");
    const submitBtn = form.querySelector('button[type="submit"]');

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
            <div class="alert alert-danger fade show border-0 rounded-4 shadow-sm">
                ${errors.join("<br>")}
            </div>
        `;
    } else {
        // Formspree beküldés
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Küldés folyamatban...';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alertBox.innerHTML = `
                    <div class="alert alert-success fade show border-0 rounded-4 shadow-sm">
                        <h5 class="fw-bold">Köszönjük!</h5>
                        <p class="mb-0">Az üzenetét sikeresen továbbítottuk a kremznerg@gmail.com címre. Hamarosan válaszolunk!</p>
                    </div>
                `;
                form.reset();
            } else {
                const data = await response.json();
                alertBox.innerHTML = `
                    <div class="alert alert-danger fade show border-0 rounded-4 shadow-sm">
                        Hiba történt a küldés során: ${data.errors ? data.errors.map(err => err.message).join(', ') : 'Ismeretlen hiba'}
                    </div>
                `;
            }
        } catch (error) {
            alertBox.innerHTML = `
                <div class="alert alert-danger fade show border-0 rounded-4 shadow-sm">
                    Hiba történt a hálózati kapcsolatban. Kérjük, próbálja meg újra később!
                </div>
            `;
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Üzenet küldése';
        }
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
