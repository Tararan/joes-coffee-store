import React,  { Component } from 'react';
import closeBtn from "../images/assets/close-2.png";


class Overlay extends Component {
    render () {
        const { boximage, boxtitle, boxprice, discountprice, bestseller, available, description, closeOverlay, toggleOverlay} = this.props;
        console.log('toggleOverlay');
        console.log(toggleOverlay.isOpen);
        // console.log(clickedItem);
        return (
            <section className={`Overlay
        ${!toggleOverlay ? 'Overlay--is-open':''}
        ${bestseller ? 'Overlay--best-seller' : ''}`}>
            <button onClick={closeOverlay} className="Overlay__close">
                <img className="Overlay__close-img" src={ closeBtn }/>
            </button>
            <div className="container">
            <div className="col-md-6">
                <div className="Overlay__content">
                    <div className="Overlay__content-img-wrapper">
                        <img className="Overlay__content-img" src={ boximage } alt="product"/>
                    </div>
                    <h2 className="Overlay__content-title">
                        { boxtitle } test
                    </h2>
                    <p className="Overlay__content-price">
                    <span className="Overlay__content-price-regular"> { boxprice }</span> <span className="Overlay__content-price-discount">{discountprice}</span>
                    </p>
                    <div className="button__wrapper">
                        <a className={`button ${available ? 'button--product-box' : 'button--unavailable'}`} role="button"
                        onClick= {this.addToCart}>
                            {available ? 'Add to cart' : 'Unavailable'}
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="Overlay__description">
                        <h1 className="Overlay__description-title">{`About ${ boxtitle } `} </h1>
                        <p className="Overlay__description-txt">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
} 

export default Overlay;


/* CREATE TABLE products(
    id serial PRIMARY KEY
    boximage text, 
    boxtitle text, 
    boxprice money, 
    discountprice money, 
    bestseller boolean, 
    available boolean, 
    description  text
); */