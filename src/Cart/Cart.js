import React, { Component } from "react";
// import cartFunction from './cartFunction';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { isMenuOpen: true };
    }

    ToggleCartMenu = e => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
      }

render () {
    return(
        <span className="Cart">
            <a className="Cart__button"
            onClick= {this.ToggleCartMenu}> 
                <span className="Cart__button-count">0</span>
            </a>
            <ul className={`Cart__menu ${this.state.isMenuOpen ? "": "Cart__menu--is-open"}`}>
                <li className="Cart__menu-item">
                    <img src="https://i.imgur.com/tcWrCoO.png"/> 
                    <span>Name</span>
                    <span>€9.99</span>
                </li>
            </ul>
        </span>
        );
    }
}

export default Cart;