let toggleBtn = document.querySelector('.toggleBar');
let nav = document.querySelector('.nav');
let navBar = document.querySelector('.navBar');
let active = false;



toggleBtn.addEventListener('click', () => {
    if (active == false) {
        nav.style.display = "block";
        // navBar.style.background = "#042f36"
        toggleBtn.classList.add('open');
        active = true;

    }
    else {
        nav.style.display = 'none';
        // navBar.style.background = "transparent"
        toggleBtn.classList.remove('open');
        active = false;
    }
})




