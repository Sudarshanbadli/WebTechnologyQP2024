document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for question-answer pairs on scroll
    const qaPairs = document.querySelectorAll('.qa-pair');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    qaPairs.forEach(pair => observer.observe(pair));

    // Toggle answer visibility and chevron rotation on question click
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            answer.classList.toggle('hidden');
            question.classList.toggle('active');
        });

        // Allow keyboard interaction (Enter or Space key)
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});