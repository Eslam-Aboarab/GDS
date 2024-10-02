document.getElementById('mode-toggle').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('light-mode');

    const techCards = document.querySelectorAll('.tech-card');
    const considerations = document.querySelectorAll('.consideration');

    techCards.forEach(card => card.classList.toggle('light-mode'));
    considerations.forEach(item => item.classList.toggle('light-mode'));

    // Change button text
    if (body.classList.contains('light-mode')) {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }
});
