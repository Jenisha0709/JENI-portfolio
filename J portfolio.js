function toggleContent(section) {
    const content = section.querySelector('.content');
    content.classList.toggle('show');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
}


  

