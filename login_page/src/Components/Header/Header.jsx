import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Background from "./Background"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <Background />
            <Logo />
        </div>
    );
}

export default Header;
