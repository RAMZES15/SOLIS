function hamburger() {
    const hamburger = document.getElementById('hamburger').classList.toggle('--open');
    const overlay = document.getElementById('overlay').classList.toggle('--open');
    const header_nav = document.getElementById('header-nav').classList.toggle('--open');
    const header = document.getElementById('header').classList.toggle('--open');
    const body = document.body.classList.toggle('--open');
}