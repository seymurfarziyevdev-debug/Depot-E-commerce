
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch('db.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (productsData) {
    const product = productsData.products.find(product => product.id == productId);
    if (product) {
      const productTitle = document.querySelector(".product-title");
      const productPrice = document.querySelector(".product-price");
      const rating       = document.querySelector(".rating");
      const description  = document.querySelector(".description");
      const sku          = document.querySelector(".sku")
      const category     = document.querySelector(".category")
      const tags         = document.querySelector(".tags")
      const primaryImage = document.querySelector(".primaryimg");
      const secondaryImages = document.querySelector(".secondaryimgs");
      const categorylinkhead = document.querySelector(".categorylinkhead");
      const prdnamelink = document.querySelector(".prdnamelink");
      const tabdesc     = document.querySelector(".tabdesc");
      const Weight     = document.querySelector(".Weight");
      const Dimensions     = document.querySelector(".Dimensions");
      const Color     = document.querySelector(".Color");
      const Material     = document.querySelector(".Material");
      const commentimg     = document.querySelector(".commentimg");
      const cname     = document.querySelector(".cname");
      const csurname     = document.querySelector(".csurname");
      const comment     = document.querySelector(".comment");
      const commentdate     = document.querySelector(".commentdate");
      const commentrating     = document.querySelector(".commentrating");


    

      commentrating.textContent =`${product.crating}`  
      comment.textContent =`${product.ctext}`  
      cname.textContent =`${product.cname}`  
      csurname.textContent =`${product.csurname}`  
      commentimg.innerHTML = `<img src="src/image/${product.cphoto}">`;

      commentdate.textContent =`${product.comment_date}`  
      productTitle.textContent = `${product.name}`;
      productPrice.textContent = `$${product.price}`;
      rating      .textContent =`${product.pr_rating}`;
      description .innerHTML   =`${product.description}`;
      sku         .innerHTML =`<span>Sku : </span>${product.sku}`;
      category    .innerHTML =`<span>Category : </span>${product.category}`;
      tags        .innerHTML =`<span>Tags : </span>${product.tags}`;
      prdnamelink .textContent =`${product.name}`;
      categorylinkhead .textContent =`${product.category}`;
      tabdesc .innerHTML =`${product.description}`;
      Weight .innerHTML =`<span>Weight</span> :${product.weight}`;
      Dimensions .innerHTML =`<span>Dimensions</span> :${product.dimensions}`;
      Color .innerHTML =`<span>Color</span> :${product.color}`;
      Material .innerHTML =`<span>Material</span> :${product.material}`;
      
      


      primaryImage.innerHTML = `<img src="src/image/${product.primary_photo}">`;
    

      product.secondary_photos.forEach(photo => {
        secondaryImages.innerHTML += `<img src="src/image/${photo}" alt="${product.name}">`;
      });



      
  const cratingStars = document.querySelector(".commentrating");

  function generateCratingStars(crating) {
    const emptyStar = '<i class="fa-regular fa-star"></i>';
    const filledStar = '<i class="fa-solid fa-star" style="color: #fffb05;"></i>';
  
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= crating) {
        starsHTML += filledStar;
      } else {
        starsHTML += emptyStar;
      }
    }
  
    cratingStars.innerHTML = starsHTML;
  }
  
  generateCratingStars(product.crating);








  
      const ratingValue = product.pr_rating; 

      const ratingStars = document.querySelector(".rating");

 
      function generateRatingStars(rating) {
  
        const emptyStar = '<i class="fa-regular fa-star"></i>';
 
        const filledStar = '<i class="fa-solid fa-star" style="color: #fffb05;"></i>';

        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
       
          if (i <= rating) {
            starsHTML += filledStar;
          } else {
            starsHTML += emptyStar;
          }
        }


        ratingStars.innerHTML = starsHTML;
      }

      generateRatingStars(ratingValue);
      
    } else {
      console.log('Product Movcud deyil');
    }
  })

  .catch(function (error) {
    console.error("data xetasi:", error);
  });





  let tabs = document.querySelectorAll('.tabs div');
  let contents = document.querySelectorAll('.content div');
  
  for (let tab of tabs) {
      tab.addEventListener('click', function () {
          let activeElement = document.querySelector('.active');
          activeElement.classList.remove('active');
          this.classList.add('active');
          let index = this.getAttribute("data-index");
          for (let content of contents) {
              if (index == content.getAttribute("data-index")) {
                  content.classList.add("show")
              } else {
                  content.classList.remove("show")
              }
          }
      });
  }

  
  