const scrollingFunction = () => {
    const header = document.getElementsByClassName('Header')[0];
    const nav = document.getElementsByClassName('Nav')[0];
    const sticky = 'Nav--is-sticky';
    const navLinks = document.getElementsByClassName('Nav__link');

    for (let i = 0; i < navLinks.length - 1; i = i + 1) {
        navLinks[i].addEventListener('click', e => {
            window.location = e.target.href;
        });
    };

    window.onscroll = function () {
        setTimeout(function () {
            window.addEventListener('scroll', e => {
                const windowScroll = Math.round(window.scrollY);
                const headerBtm = Math.round(header.getBoundingClientRect().bottom + windowScroll);

                if (windowScroll >= headerBtm) {
                    nav.classList.add(sticky);
                } else {
                    nav.classList.remove(sticky);
                }
            });
        }, 250);
    }
};

export default scrollingFunction;
