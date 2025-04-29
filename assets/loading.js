
// Loading animation JS
document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById('loading-text');
    let dots = 0;
    setInterval(() => {
        dots = (dots + 1) % 4;
        loadingText.textContent = 'Loading' + '.'.repeat(dots);
    }, 500);
});
