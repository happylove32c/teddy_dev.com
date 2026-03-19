document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;

    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        const navHeight = 72;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
        });
    }
    });
});