import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Background from "./Background"
import LearnMoreButton from './LearnMoreButton'

const Header = () => {
    return (
        <div className="header">
            <Background />
            <Nav />
            <Logo />
            <LearnMoreButton />
        </div>
    );
}

export default Header;
