if(localStorage.getItem("basket") == null){
  localStorage.setItem("basket", JSON.stringify([]))
}


fetch('db.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (productsData) {
      const productList = document.querySelector(".productsitem");
      const categoryLinks = document.querySelectorAll(".productsmenu ul li a");

      function updateProductList(category) {
        productList.innerHTML = ''; 

        productsData.products.forEach(function (product) {
          if (category === "ALL" || product.category.includes(category)) {
            var col = document.createElement("div");
            col.className = "prd";
            col.innerHTML = `
            <a href="prd.html?id=${product.id}" class="prlink">
              <img src="src/image/${product.primary_photo}" alt="Photo" style="max-width:100%;">
              <div class="prinfo">
                  <h2 class="prtitle">${product.name}</h2>
                  <p class="price">$${product.price}</p>
                  <a class="quick">QUICK LOOK  <i class="fa-solid fa-heart"></i></a>
            </a>      
                  <a href="#" class="addtocart" data-id="${product.id}"  data-name="${product.name}" data-price="${product.price}" data-primary_photo="${product.primary_photo}">ADD TO CART  <i class="fa-solid fa-cart-plus"></i></a>
              </div>
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


      categoryLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();

        
          categoryLinks.forEach(function (l) {
            l.classList.remove("activelink");
          });

        
          link.classList.add("activelink");

          
          const category = link.textContent;
          updateProductList(category);
        });
      });

  
      updateProductList("ALL");








      
      let btns = document.querySelectorAll(".addtocart");
      let basket = JSON.parse(localStorage.getItem("basket"));
  
      btns.forEach(btn => {
          btn.addEventListener("click", function() {
              if(localStorage.getItem("basket") == null){
                  localStorage.setItem("basket", JSON.stringify([]))
              }
  
              let data_id = this.getAttribute("data-id")
              let data_price = this.getAttribute("data-price")
              let data_primary_photo = this.getAttribute("data-primary_photo")
              let data_name = this.getAttribute("data-name")
  
  
              let exist = basket.find(a => {
                  return a.id == data_id;
              })
  
              if(exist == undefined){
                  let item = {
                      id: data_id,
                      price: data_price,
                      count: 1,
                      image: data_primary_photo,
                      title: data_name
                      
                  }
  
                  basket.push(item);
              }else{
                  exist.count++
              }
  
              localStorage.setItem("basket", JSON.stringify(basket));
  
  
          })
      })
  
  })
  

    
  function getBasket() {
      let basket = JSON.parse(localStorage.getItem('basket'))
      let html = ""
      basket.forEach(item => {
          html+= `
  
          
                  <div class="cart-product">
                      <div class="pr-img">
                          <img src=src/image/${item.image} alt="">
                      </div>
                      <div class="pr-detail">
                          <div class="pr-title">${item.title}</div>
                      <div class="pr-price">$${item.price}</div>
                      </div>
                      <div data-id=${item.id} class="pr-btn"><i class="fa-solid fa-x"></i></div>
                  </div>
              
          
          
          `
      })
  
      document.querySelector('.cart-products').innerHTML = html
      
  
      
  }
  
  getBasket()




  
  
  var xBtns = document.querySelectorAll('.pr-btn')
  
      console.log(xBtns)
      xBtns.forEach(btn => {
          btn.addEventListener("click", function() {
              let basket = JSON.parse(localStorage.getItem("basket"))
  
              let data_id = this.getAttribute("data-id")
              let item = basket.find(a => {
                  return a.id == data_id
              })
  
              
                  basket.splice(basket.indexOf(item), 1)
                  this.closest(".cart-product").remove()
              
  
              localStorage.setItem("basket", JSON.stringify(basket))
  
              
          })
      





    })
    .catch(function (error) {
      console.error("Error in data:", error);
    });


    


    

