// main.js

document.addEventListener('DOMContentLoaded', () => {
    const htmlTag = document.documentElement;
    const langBtnId = document.getElementById('btn-lang-id');
    const langBtnEn = document.getElementById('btn-lang-en');

    // Cek preferensi bahasa dari localStorage
    let currentLang = localStorage.getItem('appLang') || 'id';
    setLanguage(currentLang);

    // Event listener untuk tombol bahasa
    if (langBtnId) {
        langBtnId.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('id');
        });
    }

    if (langBtnEn) {
        langBtnEn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }

    function setLanguage(lang) {
        htmlTag.setAttribute('lang', lang);
        localStorage.setItem('appLang', lang);

        // Update active state di tombol
        if (lang === 'id') {
            langBtnId?.classList.add('font-bold', 'text-blue-600');
            langBtnId?.classList.remove('text-gray-500');
            langBtnEn?.classList.remove('font-bold', 'text-blue-600');
            langBtnEn?.classList.add('text-gray-500');
        } else {
            langBtnEn?.classList.add('font-bold', 'text-blue-600');
            langBtnEn?.classList.remove('text-gray-500');
            langBtnId?.classList.remove('font-bold', 'text-blue-600');
            langBtnId?.classList.add('text-gray-500');
        }
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
