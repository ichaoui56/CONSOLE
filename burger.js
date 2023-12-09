const starButton = document.getElementById('star');
const sideBar = document.querySelector('.container0');

starButton.addEventListener('click', function () {
    if (sideBar.style.display == 'none') {
        sideBar.style.display = 'block'; 
    } else {
        sideBar.style.display = 'none'; 
    }
});

