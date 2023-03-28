
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('--dark-theme');
    document.getElementById('themes-btn').classList.add('--dark');
    document.getElementById('start-bg').classList.add('--dark');
} else {
    document.body.classList.remove('--dark-theme');
    document.getElementById('themes-btn').classList.remove('--dark')
    document.getElementById('start-bg').classList.remove('--dark')
}

function toggle() {
    const theme = document.body.classList.toggle('--dark-theme');
    const theme_btn = document.getElementById('themes-btn').classList.toggle('--dark');
    const start_bg = document.getElementById('start-bg').classList.toggle('--dark');
}

