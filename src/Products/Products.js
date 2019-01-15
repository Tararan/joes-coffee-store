import React, { Component } from "react";

class Products extends Component {
  render() {
    const { boxImage, boxTitle, boxPrice, discountPrice, bestSeller, available, addToCart, toggleOverlay, description} = this.props;
    return (
      <div className="col-md-4">
        <article className={ `products__box ${discountPrice.length ? 'products__box--discount' : ''}
            ${bestSeller ? 'products__box--best-seller' : ''} 
            ${available ? '' : 'products__box--unavailable'} ` }>
          <div className="products__box-img-wrapper" 
          onClick={toggleOverlay}>
            <img className="products__box-img" src={boxImage} alt="product" />
          </div>
          <h2 className="products__box-title">{boxTitle}</h2>
          <p className="products__box-price">
          <span className="products__box-price-regular">{boxPrice}</span> <span className="products__box-price-discount">{discountPrice}</span>
          </p>
          <div className='button__wrapper'>
            <button className={`button ${available ? 'button--product-box' : 'button--unavailable'}`}
            onClick= {addToCart}>
                {available ? 'Add to cart' : 'Unavailable'}
            </button>
          </div>
          <small className='products__description-txt hidden'> {description} </small>
        </article>
      </div>
    );
  }
}

export default Products;
 