import React, { Component } from "react";
import Nav from './Nav';
import CartContainer from '../Cart/CartContainer';

class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive: true };
    }

    ToggleHamburger = e => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
        const { navContent, addToCart } = this.props
        return (
            <div>
                <nav name="nav" className="Nav">
                    <div className="container">
                        <button className={`Nav__hamburger ${this.state.isActive ? "" : "Nav__hamburger--is-open"}`} data-toggle="collapse"
                            onClick={this.ToggleHamburger}>
                            <span className="Nav__hamburger-line Nav__hamburger-line--first"></span>
                            <span className="Nav__hamburger-line Nav__hamburger-line--second"></span>
                            <span className="Nav__hamburger-line Nav__hamburger-line--third"></span>
                        </button>
                        <ul className={`Nav__list ${this.state.isActive ? "" : "Nav__list--is-open"}`}>
                            {navContent.map((user, i) => {
                                return (
                                    <Nav key={`Nav__${i}`}
                                        listItem={user.listItem}
                                        listItemLink={user.listItemLink}
                                    />
                                )
                            })}
                        </ul>
                        <div className="Nav__dynamic">
                            <button className="Nav__action-icon Nav__action-icon--login"></button>
                            <CartContainer addToCart={addToCart} />
                        </div>
                    </div>
                </nav>
                <div className="header__stop-clicking"></div>
            </div>
        );
    }
}
export default NavContainer;