import React from 'react';
// import boxImage from '../images/coffee/coffee1.jpg'

const Products = ({boxImage, boxTitle, boxPrice, boxButton }) => {
return (
    <div className="col-md-4">
    <article className="products__box">
        <img className="products__box-img" src={boxImage} alt="product"/>
        <h2 className="products__box-title">
            {boxTitle}
        </h2>
        <p className="products__box-price">
            {boxPrice}
        </p>
        <a href="/Home" className="button button--product-box" role="button">
            {boxButton}
        </a>
    </article>
    </div>
);
}

export default Products;