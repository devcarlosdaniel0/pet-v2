const menuBtn = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);