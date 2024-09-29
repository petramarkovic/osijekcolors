document.addEventListener('DOMContentLoaded', () => {
    menuHandler();
});

function menuHandler() {
    const body = document.querySelector('body');
    const nav = document.querySelector('.js-nav');
    const navOpenBtn = document.querySelector('.js-nav-open');
    const navCloseBtn = document.querySelector('.js-nav-close');
    const navActiveClass = 'nav--active';
    const scrollDisabledClass = 'scroll-disabled';
    let isMenuOpen = false;

    navOpenBtn.addEventListener('click', () => {
        if (!isMenuOpen) {
            nav.classList.add(navActiveClass);
            body.classList.add(scrollDisabledClass);
            isMenuOpen = true;
        }
    })

    navCloseBtn.addEventListener('click', () => {
        if (isMenuOpen) {
            nav.classList.remove(navActiveClass);
            body.classList.remove(scrollDisabledClass);
            isMenuOpen = false;
        }
    })

    document.addEventListener('keydown', (e) => {
        if (isMenuOpen && e.key === 'Escape') {
            nav.classList.remove(navActiveClass);
            body.classList.remove(scrollDisabledClass);
            isMenuOpen = false;
        }
    })
}