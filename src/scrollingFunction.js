const scrollingFunction = function() {
  window.onload = function() {
    const header = document.getElementsByClassName('Header')[0];
    const nav = document.getElementsByClassName('Nav')[0];
    const sticky = 'Nav--is-sticky';

    setTimeout( function() {
        window.addEventListener("scroll", e => {
        const windowScroll = Math.round(window.scrollY);
        const headerBtm = Math.round(header.getBoundingClientRect().bottom + windowScroll);

        if(windowScroll >= headerBtm) {
            nav.classList.add(sticky);
        } else {
            nav.classList.remove(sticky);
                }
        });
    }, 0);
}
};

export default scrollingFunction;
