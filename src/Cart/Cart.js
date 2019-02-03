import React, { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { isMenuOpen: true };
    }

    ToggleCartMenu = e => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        const { id, boximage, boxtitle, boxprice, discountprice, addToCart } = this.props;
        console.log('addToCart');
        console.log(addToCart);
        console.log(addToCart[0]);
        console.log(boxtitle);
        return (
            <span>
                <button className="Cart__button"
                    onClick={this.ToggleCartMenu}>
                    <span className="Cart__button-count">0</span>
                </button>
                <ul className={`Cart__menu ${this.state.isMenuOpen ? "" : "Cart__menu--is-open"}`}>
                    <li className={`Cart__menu-item ${boxtitle ? '' : 'hide'}`}>
                        <img src={boximage} alt="product-small" />
                        <span>{boxtitle }</span>
                        <span>{discountprice ? `${discountprice}` : `${boxprice}`}</span>
                    </li>
                    <li className={`Cart__menu-item ${boxtitle ? 'hide' : ''}`}>
                        <span>Your cart is empty</span>
                    </li>
                </ul>
            </span>
        );
    }
}

export default Cart;