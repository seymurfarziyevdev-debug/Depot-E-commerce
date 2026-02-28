document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 1;
    let i1 = document.querySelector('.i1');
    let i2 = document.querySelector('.i2');
    let i3 = document.querySelector('.i3');
    let numbers = document.querySelectorAll('.number');

    // Başlanğıcda yalnız birinci slide göstərilir
    i1.style.display = 'flex';
    i2.style.display = 'none';
    i3.style.display = 'none';
    numbers[0].querySelector('.line').style.width = '70px';

    function changeSlide(clickedNumber) {
        // Bütün line-ları reset et
        numbers.forEach(function(num) {
            num.querySelector('.line').style.width = '20px';
        });

        // Slide-ları gizlət və seçilən slide göstər
        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'none';

        if (clickedNumber === 1) i1.style.display = 'flex';
        if (clickedNumber === 2) i2.style.display = 'flex';
        if (clickedNumber === 3) i3.style.display = 'flex';

        document.querySelector('.number[data-id="' + clickedNumber + '"] .line').style.width = '70px';
    }

    numbers.forEach(function(number) {
        number.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-id'), 10);
            changeSlide(currentSlide);
        });
    });

    function autoChange() {
        currentSlide++;
        if (currentSlide > 3) currentSlide = 1;
        changeSlide(currentSlide);
    }

    setInterval(autoChange, 4000);
});



document.addEventListener("DOMContentLoaded", function() {
    const sidebarOpen = document.getElementById("sidebar"); // Hamburger ikonun
    const sidebarClose = document.getElementById("sidebarclose"); // X butonun
    const sidebox = document.getElementById("sidebox");
    const mainNavLinks = document.querySelector(".navbar-nav").innerHTML;

    // Menü içeriğini oluştur (Mevcut linkleri siyah kutuya kopyala)
    const menuContainer = document.createElement("ul");
    menuContainer.innerHTML = mainNavLinks;
    sidebox.appendChild(menuContainer);

    // Açma Fonksiyonu
    sidebarOpen.addEventListener("click", function(e) {
        e.preventDefault();
        sidebox.classList.add("active");
        document.body.style.overflow = "hidden"; // Menü açıkken arka plan kaymasın
    });

    // Kapatma Fonksiyonu (X butonu)
    sidebarClose.addEventListener("click", function() {
        sidebox.classList.remove("active");
        document.body.style.overflow = "auto"; // Kaydırmayı geri aç
    });
});
