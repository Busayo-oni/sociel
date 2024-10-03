const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

// Add event listener for the menu button to toggle the active class
menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});