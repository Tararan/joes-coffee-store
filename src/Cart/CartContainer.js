import React, { Component } from 'react';
import Cart from './Cart';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isMenuOpen: true };
    }

    ToggleCartMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    render() {
        const { addToCart, removeFromCart, updatePrice } = this.props;
        if (addToCart.length !== 0) {
            return (
                <span className="Cart">
                    <button className="Cart__button"
                        onClick={this.ToggleCartMenu}>
                        <span className="Cart__button-count">{addToCart.length}</span>
                    </button>
                    <ul className={`Cart__menu ${this.state.isMenuOpen ? "" : "Cart__menu--is-open"}`}>
                        {addToCart.map((data, i) => {
                            return (
                                <Cart
                                    key={`Cart-key-${i}`}
                                    removeFromCart={removeFromCart}
                                    addToCart={addToCart}
                                    id={data.id}
                                    index={i}
                                    boximage={data.boximage}
                                    boxtitle={data.boxtitle}
                                    boxprice={data.boxprice}
                                    discountprice={data.discountprice}
                                    updatePrice={updatePrice}
                                />
                            );
                        })}
                        <div>
                            {updatePrice}
                        </div>
                    </ul>
                </span>
            )
        } else {
            return (
                <span className="Cart">
                    <button className="Cart__button"
                        onClick={this.ToggleCartMenu}>
                        <span className="Cart__button-count">{addToCart.length}</span>
                    </button>
                    <ul className={`Cart__menu ${this.state.isMenuOpen ? "" : "Cart__menu--is-open"}`}>
                        <li className='Cart__menu-item'>
                            <span>
                                Your shopping cart is empty
                            </span>
                        </li>
                    </ul>
                </span>
            );
        }
    }
};

export default CartContainer;