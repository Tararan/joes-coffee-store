import React, { Component } from "react";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }

  render() {
    const { boxImage, boxTitle, boxPrice, discountPrice, bestSeller, available } = this.props;
    return (
      <div className="col-md-4">
        <article className={ `products__box 
                            ${discountPrice.length ? 'products__box--discount' : ''}
                            ${bestSeller ? 'products__box--best-seller' : ''} 
                            ${available ? '' : 'products__box--unavailable'} ` }>
          <div className="products__box-img-wrapper">
            <img className="products__box-img" src={boxImage} alt="product" />
          </div>
          <h2 className="products__box-title">{boxTitle}</h2>
          <p className="products__box-price"><span className="products__box-price-regular">{boxPrice}</span> <span className="products__box-price-discount">{discountPrice}</span></p>
          <div className='button__wrapper'>
            <a href="/Home" className={`button ${available ? 'button--product-box' : 'button--unavailable'}`} role="button">
                {available ? 'Add to cart' : 'Unavailable'}
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default Products;
 