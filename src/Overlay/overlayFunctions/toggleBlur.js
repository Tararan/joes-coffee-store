const toggleBlur = () => {

    const article = document.getElementsByTagName('article');
    const sidebar = document.getElementsByTagName('aside');
    const nav = document.getElementsByClassName('Nav');
    const body = document.getElementsByTagName('body')[0];
    const productsTitle = document.getElementsByClassName('products__title');
    const blurRepeater = function(element) {
      for (let i = 0; i < element.length; i++) {
        element[i].classList.toggle('blur-applied');
      }
    }
    // if(this.state.isOpen) {
      blurRepeater(article);
      blurRepeater(sidebar);
      blurRepeater(productsTitle);
      blurRepeater(nav);
      body.classList.toggle('disable-scrolling');
    // }
};

export default toggleBlur;