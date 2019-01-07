import React, { Component } from "react";
import Nav from './Nav';


class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive: true };
      }
    
      ToggleHamburger = e => {
        this.setState({ isActive: !this.state.isActive });
      };
    
      ToggleMenu = e => {
        this.setState({ isActive: !this.state.isActive });
      };
      
    render () {
    const { navContent } = this.props
    return(
        <div>
            <nav name="nav" className="Nav">
                <div className="container">
                    <a className={`Nav__hamburger ${this.state.isActive ? "" : "Nav__hamburger--is-open"}`} data-toggle="collapse"
                    role="button" aria-expanded="false"
                    onClick={this.ToggleHamburger}>
                        <span className="Nav__hamburger-line Nav__hamburger-line--first"></span>
                        <span className="Nav__hamburger-line Nav__hamburger-line--second"></span>
                        <span className="Nav__hamburger-line Nav__hamburger-line--third"></span>
                    </a>
                    <ul className={`Nav__list ${this.state.isActive ? "" : "Nav__list--is-open"}`}>
                        {navContent.map((user, i) => {
                            return (
                                <Nav key= {`Nav__${i}`} 
                                listItem={user.listItem}
                                listItemLink={user.listItemLink}
                                />
                            )
                        })}
                    </ul>
                    <div className="Nav__action">
                        <a className="Nav__action-icon Nav__action-icon--login"></a>
                        <a className="Nav__action-icon Nav__action-icon--cart"> 
                            <span className="Nav__action-icon-count">0</span>
                        </a>
                        <ul className="Nav__action-cart-menu">
                            <li className="Nav__action-cart-menu-item">
                                <img src=""/> 
                                <p>
                                <span></span>
                                <span></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header__stop-clicking"></div>
        </div>
    );
}
}
export default NavContainer;