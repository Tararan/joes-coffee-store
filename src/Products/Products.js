import React from 'react';
// import {boxImage, boxTitle, boxPrice, boxButton} from './productsContent';

const Products = ({boxImage, boxTitle, boxPrice, boxButton, discountPrice, bestSeller, available }) => {
// export default class Products extends Component {
/*     constructor() {
        super();
        this.state = {
            isActive: true
        };
    } */

// render () {
return (
    <div className="col-md-4">
    <article className={`products__box`}>
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
// }
// }
}

export default Products;