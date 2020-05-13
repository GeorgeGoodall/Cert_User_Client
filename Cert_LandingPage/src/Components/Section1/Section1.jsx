import React from 'react';
import "./Section1.css"

import DesktopMobileWidget from './desktopMobileWidget';

const Section1 = () => {
    return (
    <div className={"sectionContainer green"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={"sectionBackground"}>
        <path fillOpacity="1" d="M0,32L80,53.3C160,75,320,117,480,160C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <div id="section1" className={"section reverse"}>
            <div className="halfText">
                <h1>Test Header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptates reprehenderit quasi deserunt exercitationem perferendis delectus at ex. Nesciunt obcaecati iusto dolor voluptas ipsum fugit, ducimus consequuntur eligendi labore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptates reprehenderit quasi deserunt exercitationem perferendis delectus at ex. Nesciunt obcaecati iusto dolor voluptas ipsum fugit, ducimus consequuntur eligendi labore?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptates reprehenderit quasi deserunt exercitationem perferendis delectus at ex. Nesciunt obcaecati iusto dolor voluptas ipsum fugit, ducimus consequuntur eligendi labore?</p>
            </div>
            <div className="DektopMobileWidgetContainer">
                <DesktopMobileWidget />
            </div>
        </div>
    </div>
    );
}

export default Section1;
