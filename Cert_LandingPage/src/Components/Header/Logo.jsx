import React from 'react';
import UniLogo from './uniLogo'

const Logo = () => {
    return (
        <div className="Logo">
            <UniLogo />
            <h1 className="LogoText"> <span className="redText">C</span>ardiff<br/><span className="redText">E</span>motion<br/><span className="redText">R</span>ecognition<br/><span className="redText">T</span>raining</h1>
        </div>
    );
}

export default Logo;
