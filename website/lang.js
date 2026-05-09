let currentLang = 'zh';

function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (pageTranslations[currentLang] && pageTranslations[currentLang][key]) {
            el.textContent = pageTranslations[currentLang][key];
        }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'zh' ? 'English' : '中文';
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('preferredLang', currentLang);
    applyLang();
}

window.addEventListener('DOMContentLoaded', () => {
    currentLang = localStorage.getItem('preferredLang') || 'zh';
    applyLang();

    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});