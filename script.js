window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("active", window.scrollY > 0);
})

function menuToggle(){
    const menuBar = document.querySelector('.menubar');
    const nav = document.querySelector('.nav');
    menuBar.classList.toggle('active');
    nav.classList.toggle('active');
}