
let totalBasketPrice = document.querySelector("#totalbasketprice")
let basket = JSON.parse(localStorage.getItem("basket"))

if(localStorage.getItem("basket") == null){
    localStorage.setItem("basket", JSON.stringify([]))
    totalBasketPrice.innerHTML = 0
}else{

    let price = 0
    basket.map(a => price += Number(a.count) * Number(a.price));

    totalBasketPrice.innerHTML = price.toFixed(2)
}

let db;
fetch("db.json")
.then(res => res.json())
.then(data => {
    db = data.products;

    let html = ""
    basket.forEach(element => {

        let dbItem = db.find(a => {
            return a.id == element.id
        })

        console.log(dbItem);
        
        html += 
        `
        <div class="custom-card">
            <div class="img-div">
                <img src="src/image/${dbItem.primary_photo}" alt="">
            </div>
            <div class="content">
                <h3 class="title">${dbItem.name}</h3>
                <h2 class="price">$${dbItem.price}</h2>
            </div>
            <div class="count-controller">
                <h5>Quantity</h5>
                <button data-id="${element.id}" class="minusBtn"><i class="fa-solid fa-caret-left"></i></button>
                <span class="item-count">${element.count}</span>
                <button data-id="${element.id}" class="plusBtn"><i class="fa-solid fa-caret-right"></i></button>
                <div class="item-total-price">$${(element.count * dbItem.price).toFixed(2)}</div>
                </div>
        </div>
        `
    });


    document.querySelector(".basket-products").innerHTML = html;

    let minusBtns = document.querySelectorAll(".minusBtn");
    let plusBtns = document.querySelectorAll(".plusBtn");

    minusBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let data_id = this.getAttribute("data-id")
            let item = basket.find(a => {
                return a.id == data_id
            })
    
            if (item.count > 1) {
                item.count--;
                this.nextElementSibling.innerHTML = item.count;
            } else {
                basket.splice(basket.indexOf(item), 1);
                this.closest(".custom-card").remove();
            }
    
            localStorage.setItem("basket", JSON.stringify(basket));
    
            // Sadece ilgili ürünün toplam fiyatını güncelleyin
            let dbItem = db.find(a => a.id == data_id);
            let itemTotalPriceElement = this.parentElement.querySelector(".item-total-price");
            itemTotalPriceElement.innerHTML = `$${(item.count * dbItem.price).toFixed(2)}`;
    
            // Tüm ürünlerin toplam fiyatını güncelleyin
            let price = 0;
            basket.map(a => price += Number(a.count) * Number(a.price));
            totalBasketPrice.innerHTML = price.toFixed(2);
    
            localStorage.setItem("basket", JSON.stringify(basket));
        });
    });
    

    plusBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            let data_id = this.getAttribute("data-id")
            let item = basket.find(a => {
                return a.id == data_id
            })
    
            item.count++
            this.previousElementSibling.innerHTML = item.count
    
            // Sadece ilgili ürünün toplam fiyatını güncelleyin
            let dbItem = db.find(a => a.id == data_id);
            let itemTotalPriceElement = this.parentElement.querySelector(".item-total-price");
            itemTotalPriceElement.innerHTML = `$${(item.count * dbItem.price).toFixed(2)}`;
    
            localStorage.setItem("basket", JSON.stringify(basket));
    
            // Tüm ürünlerin toplam fiyatını güncelleyin
            let price = 0;
            basket.map(a => price += Number(a.count) * Number(a.price));
            totalBasketPrice.innerHTML = price.toFixed(2);
        })
    })
    
})


document.getElementById('change-address-btn').addEventListener('click', function() {
    var dropdown = document.getElementById('address-dropdown');
    dropdown.classList.toggle('show');
});

