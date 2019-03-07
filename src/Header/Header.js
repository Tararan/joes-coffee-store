import React, { Component } from "react";
import { Link } from 'react-scroll';

import logo from '../images/logo-large.png';
import scrollDownPointer from '../images/assets/down-arrow-sketch.png';
// import videoposter from '../images/header-3.jpg';


class Header extends Component {
    render()
    {
        const { videomp4, videowebm, header, subheader, playVideo } = this.props;
        return (
            <header className="Header">
                <div className="Header__video-container">
                    <div className="Header__filter"></div>
                    <video autoPlay muted loop className="Header__video">
                        <source src={`${videomp4}`} type="video/mp4"/>
                        <source src={`${videowebm}`} type="video/webm"/>
                        Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div>
                <div className="Header__content">
                    <div className="container">
                        <a className="Header__content-logo" href="./home.html">
                            <img src={logo} alt="joe's-coffee-logo"/>
                        </a>
                        <h1 className="Header__content-title">
                            {header}
                        </h1>
                        <p className="Header__content-subtitle">
                            {subheader}
                        </p>
                        <Link className="Header__content-arrow" 
                        to={`nav`} offset={0} smooth={'easeInOutQuint'} duration={950} ignoreCancelEvents={true}>
                            <img className="Header__content-arrow-img" src={scrollDownPointer}
                                alt="animated-down-pointing-arrow"/>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
