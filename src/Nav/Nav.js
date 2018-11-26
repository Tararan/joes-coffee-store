import React from 'react';
import { Link } from 'react-scroll';

class Nav extends React.Component {
    render() {
        const { listItem, listItemLink } = this.props;
        return (
            <li key={`Nav ${listItem}-${listItemLink}`} >
                <Link className="Nav__link" href={listItemLink} onClick={this.toggleMenu || this.ToggleHamburger}
                to={`${listItem.replace(/\s/g, "")}`} id={`Link-${listItem.replace(/\s/g, "")}`} offset={-170} smooth={'easeInOutQuint'} 
                duration={950} ignoreCancelEvents={true}>
                    {listItem}
                </Link>
            </li>
        );
    }
}

export default Nav;