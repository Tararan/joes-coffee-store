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
                    <a className={`Nav-hamburger ${this.state.isActive ? "" : "Nav-hamburger--is-open"}`} data-toggle="collapse"
                    role="button" aria-expanded="false"
                    onClick={this.ToggleHamburger}>
                        <span className="Nav-hamburger-line Nav-hamburger-line--first"></span>
                        <span className="Nav-hamburger-line Nav-hamburger-line--second"></span>
                        <span className="Nav-hamburger-line Nav-hamburger-line--third"></span>
                    </a>
                    <ul className={`Nav-list ${this.state.isActive ? "" : "Nav-list--is-open"}`}>
                {navContent.map((user, i) => {
                return (
                    <Nav key= {`Nav-${i}`} 
                    listItem={user.listItem}
                    listItemLink={user.listItemLink}
                    />
                )
                })
            }
            </ul>
            </div>
            </nav>
            <div className="header__stop-clicking"></div>
        </div>
    );
}
}
export default NavContainer;