import React from 'react';
import CertDesktopIcon from "./CertDesktopIcon";
import CertMobileIcon from './CertMobileIcon';
import mobile from "./mobileView.jpg"
import desktop from "./desktopView.PNG"

const DesktopMobileWidget = () => {
    return (
        <div>
            <div className="mobileDesktopWidget">
                <div className="desktopContiner">
                    <CertDesktopIcon image={desktop}/>
                </div>
                <div className="mobileContainer">
                    <CertMobileIcon image={mobile}/>
                </div>
            </div>
        </div>
    );
}

export default DesktopMobileWidget;
