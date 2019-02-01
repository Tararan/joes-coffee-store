const toggleBlur = () => {

  const header = document.getElementsByClassName('Header');
  const nav = document.getElementsByClassName('Nav');
  const section = document.getElementsByClassName('section');
  const body = document.getElementsByTagName('body')[0];

  const blurRepeater = function (element) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle('blur-applied');
    }
  }

  blurRepeater(header);
  blurRepeater(nav);
  blurRepeater(section);
  body.classList.toggle('disable-scrolling');
};

export default toggleBlur;