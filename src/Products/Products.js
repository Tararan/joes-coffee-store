import React, { Component } from "react";
import closeBtn from "../images/assets/close-2.png";

class Products extends Component {
constructor(props) {
    super(props);
    this.state = { isOpen: true };
}

addToCart = (e) => {
    // console.log(e);
  }

ToggleOverlay = () => {
    console.log('clicked');
    this.setState({ isOpen: !this.state.isOpen });
    const article = document.getElementsByTagName('article');
    const sidebar = document.getElementsByTagName('aside');
    const body = document.getElementsByTagName('body')[0];
    const productsTitle = document.getElementsByClassName('products__title');
    const nav = document.getElementsByClassName('Nav');

    const blurRepeater = function(element) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.toggle('blur-applied');
        }
    }

    blurRepeater(article);
    blurRepeater(sidebar);
    blurRepeater(productsTitle);
    blurRepeater(nav);

    body.classList.toggle('disable-scrolling');

}
  render() {
    const { boxImage, boxTitle, boxPrice, discountPrice, bestSeller, available, description} = this.props;
    return (
      <div className="col-md-4">
        <article className={ `products__box ${discountPrice.length ? 'products__box--discount' : ''}
            ${bestSeller ? 'products__box--best-seller' : ''} 
            ${available ? '' : 'products__box--unavailable'} ` }>
          <div className="products__box-img-wrapper" onClick={this.ToggleOverlay}>
            <img className="products__box-img" src={boxImage} alt="product" />
          </div>
          <h2 className="products__box-title">{boxTitle}</h2>
          <p className="products__box-price">
            <span className="products__box-price-regular">{boxPrice}</span> <span className="products__box-price-discount">{discountPrice}</span>
          </p>
          <div className='button__wrapper'>
            <a className={`button ${available ? 'button--product-box' : 'button--unavailable'}`} role="button"
            onClick= {this.addToCart}>
                {available ? 'Add to cart' : 'Unavailable'}
            </a>
          </div>
        </article>
        <section className={`Overlay ${this.state.isOpen ? "" : "Overlay--is-open"} ${discountPrice.length ? 'Overlay--discount' : ''} 
                ${bestSeller ? 'Overlay--best-seller' : ''}`}>
            <a onClick={this.ToggleOverlay} className="Overlay__close" type="button">
                <img className="Overlay__close-img" src={ closeBtn }/>
            </a>
            <div className="container">
                <div className="col-md-6">
                    <div className="Overlay__content">
                        <div className="Overlay__content-img-wrapper">
                            <img className="Overlay__content-img" src={ boxImage } alt="product"/>
                        </div>
                        <h2 className="Overlay__content-title">
                            { boxTitle }
                        </h2>
                        <p className="Overlay__content-price">
                        <span className="Overlay__content-price-regular"> { boxPrice }</span> <span className="Overlay__content-price-discount">{discountPrice}</span>
                        </p>
                        <div className="button__wrapper">
                            <a className={`button ${available ? 'button--product-box' : 'button--unavailable'}`} role="button"
                            onClick= {this.addToCart}>>
                                {available ? 'Add to cart' : 'Unavailable'}
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Overlay__description">
                            <h1 className="Overlay__description-title">{`About ${ boxTitle } `} </h1>
                            <p className="Overlay__description-txt">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
        </section>
      </div>
    );
  }
}

export default Products;
 