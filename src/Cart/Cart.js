import React, { Component } from "react";

class Cart extends Component {
    render() {
        const { id, boximage, boxtitle, boxprice, discountprice } = this.props;
        /*         console.log('addToCart');
                console.log(addToCart);
                console.log(addToCart[0]);
                console.log(boxprice); */
        return (
            <li className={`Cart__menu-item ${boxtitle ? '' : 'hide'}`}>
                <img src={boximage} alt="product-small" />
                <span>{boxtitle}</span>
                <span>{discountprice ? `${discountprice}` : `${boxprice}`}</span>
                <div className="Cart__menu-item-delete">
                    <span className="Cart__menu-item-delete-icon">
                        ×
                    </span>
                </div>
            </li>
        );
    }
}

export default Cart;