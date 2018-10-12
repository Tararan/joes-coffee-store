import React from 'react';

class Nav extends React.Component {
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
    render() {
        return (
            <div>
            <nav id="nav" className="Nav">
                <div className="container">
                    <a href="/Home"className={`Nav-hamburger ${this.state.isActive ? "" : "Nav-hamburger--is-open"}`} data-toggle="collapse"
                    role="button" aria-expanded="false"
                    onClick={this.ToggleHamburger}>
                        <span className="Nav-hamburger-line Nav-hamburger-line--first"></span>
                        <span className="Nav-hamburger-line Nav-hamburger-line--second"></span>
                        <span className="Nav-hamburger-line Nav-hamburger-line--third"></span>
                    </a>
                    <ul className={`Nav-list ${this.state.isActive ? "" : "Nav-list--is-open"}`}>
                    {this.props.listItem.map((item, i) => {
                        return (
                            <li key={`Nav ${item}-${i}`} >
                                <a href="/Home" onClick={this.toggleMenu || this.ToggleHamburger}>
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </nav>
            <div className="header__stop-clicking"></div>
            </div>
        );
    }
}

export default Nav;