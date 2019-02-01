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
        const { addToCart } = this.props;
        return (
            <span className="Cart">
                <button className="Cart__button"
                    onClick={this.ToggleCartMenu}>
                    <span className="Cart__button-count">0</span>
                </button>
                <ul className={`Cart__menu ${this.state.isMenuOpen ? "" : "Cart__menu--is-open"}`}>
                    <li className="Cart__menu-item">
                        <img src="https://i.imgur.com/tcWrCoO.png" alt="product-small" />
                        <span>Name</span>
                        <span>€9.99</span>
                    </li>
                </ul>
            </span>
        );
    }
}

export default Cart;