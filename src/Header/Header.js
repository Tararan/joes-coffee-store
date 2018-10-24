import React from "react";
import { Link } from 'react-scroll';

import logo from '../images/logo-large.png';
import scrollDownPointer from '../images/assets/down-arrow-sketch.png';
import videoposter from '../images/header-3.jpg';


const Header = ({ videomp4, videowebm, header, subheader }) => {
return (
    <header className="Header">
        <div className="Header__video-container">
            <div className="Header__filter"></div>
            <video autoPlay loop className="Header__video" poster={`${videoposter}`}>
                <source src={`${videomp4}`} type="video/mp4"/>
                Your browser does not support the video tag. I suggest you upgrade your browser.
                <source src={`${videowebm}`} type="video/webm"/>
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <div className="Header__poster">
                <img src={`${videoposter}`} alt="coffee-beans"/>
            </div>
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

export default Header;
