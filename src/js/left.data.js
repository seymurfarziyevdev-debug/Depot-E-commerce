fetch('db.json')
.then(function (response) {
    return response.json();
})
.then(function (productsData) {
    const productList = document.querySelector(".leftproductsitem");
    const colorFilters = document.querySelectorAll(".color-filter li a");
    const materialFilters = document.querySelectorAll(".material-filter li a");

    function updateProductList(category, colorFilter, materialFilter) {
        productList.innerHTML = '';

        productsData.products.forEach(function (product) {
            if ((category === "ALL" || product.category.includes(category)) &&
                (!colorFilter || product.color === colorFilter) &&
                (!materialFilter || product.material === materialFilter)) {
                var col = document.createElement("div");
                col.className = "prd lprd";
                col.innerHTML = `
                <a href="prd.html?id=${product.id}" class="prlink">
                    <img src="src/image/${product.primary_photo}" alt="Photo" style="max-width:100%;">
                    <div class="prinfo">
                        <h2 class="prtitle lprtitle">${product.name}</h2>
                        <p class="price lprice">$${product.price}</p>
                        <a class="quick lquick">QUICK LOOK  <i class="fa-solid fa-heart"></i></a>
                        <a href="#" class="addtocart laddcart" data-id="${product.id}">ADD TO CART</a>
                    </div>
                </a>
                `;
                productList.appendChild(col);

                col.addEventListener("mouseenter", function () {
                    var priceElement = col.querySelector(".price");
                    var addToCartElement = col.querySelector(".addtocart");

                    priceElement.style.transform = "translateX(50px)";
                    priceElement.style.opacity = 0;

                    addToCartElement.style.transform = "translateX(0px)";
                    addToCartElement.style.opacity = 1;
                });

                col.addEventListener("mouseleave", function () {
                    var priceElement = col.querySelector(".price");
                    var addToCartElement = col.querySelector(".addtocart");

                    priceElement.style.transform = "translateX(0px)";
                    priceElement.style.opacity = 1;

                    addToCartElement.style.transform = "translateX(-50px)";
                    addToCartElement.style.opacity = 0;
                });
            }
        });
    }

    
    let selectedColor = null;
    let selectedMaterial = null;

    colorFilters.forEach(colorFilter => {
        colorFilter.addEventListener("click", function () {
            selectedColor = colorFilter.textContent;
            updateProductList("ALL", selectedColor, selectedMaterial);
        });
    });


    materialFilters.forEach(materialFilter => {
        materialFilter.addEventListener("click", function () {
            selectedMaterial = materialFilter.textContent;
            updateProductList("ALL", selectedColor, selectedMaterial);
        });
    });


    updateProductList("ALL", selectedColor, selectedMaterial);
})
.catch(function (error) {
    console.error("Datanin yuklenmesinde xeta:", error);
});