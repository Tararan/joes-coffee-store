import React, { Component } from "react";
import closeBtn from "../images/assets/close-2.png";

class Products extends Component {
constructor(props) {
    super(props);
    this.state = { isOpen: true };
}

OpenOverlay = () => {
    this.setState({ isOpen: !this.state.isOpen })
}
  render() {
    const { boxImage, boxTitle, boxPrice, discountPrice, bestSeller, available, description } = this.props;
    return (
      <div className="col-md-4">
        <article onClick={this.OpenOverlay} className={ `products__box ${discountPrice.length ? 'products__box--discount' : ''}
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
        <section className={`Overlay ${this.state.isOpen ? "" : "Overlay--is-open"}`}>
            <a className="Overlay__close" type="button">
                <img className="Overlay__close-img" src={ closeBtn }/>
            </a>
            <div className="container">
                <div className="col-md-6">
                    <div className="Overlay__content">
                        <img className="Overlay__content-img" src={ boxImage } alt="product"/>
                        <h2 className="Overlay__content-title">
                            { boxTitle }
                        </h2>
                        <p className="Overlay__content-price">
                        <span className="products__box-price-regular"> { boxPrice }</span> <span className="products__box-price-discount">{discountPrice}</span>
                        </p>
                        <a href="/Home" className={`button ${available ? 'button--product-box' : 'button--unavailable'}`} role="button">
                            {available ? 'Add to cart' : 'Unavailable'}
                        </a>
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
 