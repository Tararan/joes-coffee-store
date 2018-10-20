/* const blurFunction = function () {
    const content = $('.content');
    const hamburger = $('.header__nav-hamburger');

    $(document.body).append(
        '<div class="blurred-content__frame">' +
        '<div class="blurred-content"></div>' +
        '</div>');

    const blurredContentFrame = $('.blurred-content__frame');
    const blurredContentFrameVisible = 'blurred-content__frame--visible';
    content.clone().appendTo('.blurred-content');

    $(window).scroll(function () {
        const fromTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const heightCalc = (400 + (fromTop - windowHeight));

        if (fromTop >= window.innerHeight) {
            blurredContentFrame.css('height', heightCalc + 'px');
        }
    });

    hamburger.click(function () {
        blurredContentFrame.toggleClass(blurredContentFrameVisible);
    });
};
export default blurFunction;
 */