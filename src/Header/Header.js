import React from "react";
import logo from '../images/logo-large.png';
import scrollDownPointer from '../images/assets/down-arrow-sketch.png';
import videoposter from '../images/header-3.jpg';


const Header = ({ videomp4, videowebm, header, subheader }) => {
return (
    <header className="header">
        <div className="header__video-container">
            <div className="header__filter"></div>
            <video autoPlay loop className="header__video" poster={`${videoposter}`}>
                <source src={`${videomp4}`} type="video/mp4"/>
                Your browser does not support the video tag. I suggest you upgrade your browser.
                <source src={`${videowebm}`} type="video/webm"/>
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <div className="header__poster">
                <img src={`${videoposter}`} alt="coffee-beans"/>
            </div>
        </div>
        <div className="header__content">
            <div className="container">
                <a className="header__content-logo" href="./home.html">
                    <img src={logo} alt="joe's-coffee-logo"/>
                </a>
                <h1 className="header__content-title">
                    {header}
                </h1>
                <p className="header__content-subtitle">
                    {subheader}
                </p>
                <a className="header__content-arrow">
                    <img className="header__content-arrow-img" src={scrollDownPointer}
                        alt="animated-down-pointing-arrow"/>
                </a>
            </div>
        </div>
    </header>
);
}

export default Header;
