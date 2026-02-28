document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById("sidebar");
    const sidebox = document.getElementById("sidebox");
    const sidebarclose = document.getElementById("sidebarclose");

    const searchIcon = document.getElementById("searchIcon");
    const searchBox = document.getElementById("searchlink");

    function toggleSearchBox() {
        if (searchBox.style.opacity === '1') {
            searchBox.style.opacity = '0';
        } else {
            searchBox.style.opacity = '1';
        }
    }


    sidebar.addEventListener('click', function() {
        sidebox.style.left = '0';
    });
    sidebarclose.addEventListener('click', function() {
        sidebox.style.left = '100%';
    });

    searchIcon.addEventListener('click', toggleSearchBox);
});