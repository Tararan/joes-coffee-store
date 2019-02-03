import React, { Component } from 'react';
import Cart from './Cart';

// productstitle={addToCart.productsTitle}
class CartContainer extends Component {
    render () {
        const { addToCart } = this.props;
        return (
            <span className="Cart">
                {addToCart.map((data, i) => {
                    return (
                    <Cart
                        key={`Cart-key-${i}`}
                        addToCart= {addToCart}
                        id={data.id}
                        boximage={data.boximage}
                        boxtitle={data.boxtitle}
                        boxprice={data.boxprice}
                    />
                    )
                })}
            </span>
        )
    }
};

export default CartContainer;