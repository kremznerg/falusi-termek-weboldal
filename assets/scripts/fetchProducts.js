export async function loadProducts() {
    const response = await fetch("assets/json/products.json");
    const products = await response.json();
    const container = document.getElementById("productContainer");

    renderProducts(products, container);
    setupFilters(products, container);
}

function renderProducts(products, container) {
    container.innerHTML = "";

    products.forEach(prod => {
        container.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">

                    <img src="assets/images/${prod.image}" class="card-img-top" alt="${prod.name}">

                    <div class="card-body">
                        <h5 class="card-title fw-bold">${prod.name} (${prod.subcategory})</h5>
                        <p class="card-text">
                            Ár: <strong>${prod.price_per_kg} Ft/kg</strong><br>
                            Súly: ${prod.weight_range}<br>
                            Kategória: ${prod.category}
                        </p>
                    </div>

                </div>
            </div>
        `;
    });
}

function setupFilters(products, container) {
    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("categorySelect");

    searchInput.addEventListener("input", () => applyFilters(products, container));
    categorySelect.addEventListener("change", () => applyFilters(products, container));
}

function applyFilters(products, container) {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const categoryValue = document.getElementById("categorySelect").value;

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === "" || p.category === categoryValue;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered, container);
}
