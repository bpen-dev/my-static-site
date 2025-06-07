// スクロールで要素を表示するアニメーション
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    rootMargin: '-100px' // 少し早めに表示を開始
});

sections.forEach(section => {
    observer.observe(section);
});