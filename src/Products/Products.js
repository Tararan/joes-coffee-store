import React, { Component } from "react";

class Products extends Component {
  // constructor(props)
  render() {
    const { id, boximage, boxtitle, boxprice, discountprice, bestseller, available, addToCart, toggleOverlay, description} = this.props;
    return (
      <div className="col-md-4">
        <article className={ `products__box ${discountprice ? 'products__box--discount' : ''}
            ${bestseller ? 'products__box--best-seller' : ''} 
            ${available ? '' : 'products__box--unavailable'} ` }>
          <div className="products__box-img-wrapper" 
          onClick={toggleOverlay}>
            <img id={id} className="products__box-img" src={boximage} alt="product" />
          </div>
          <h2 className="products__box-title">{boxtitle}</h2>
          <p className="products__box-price">
          <span className="products__box-price-regular">{boxprice}</span> <span className="products__box-price-discount">{discountprice}</span>
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
 