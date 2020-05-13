import React from 'react';
import "./Contact.css"

const ContactSection = () => {
    return (
        <div className={"sectionContainer pink"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={"sectionBackground"}>
            <path fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,117.3C672,96,768,96,864,85.3C960,75,1056,53,1152,37.3C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div id="contact" className="contactSection">
                <h1>Contact Deetails</h1>
                <p>If you are interested in using this software please contact <a href="mailto:emotionrecognition@cardiff.ac.uk">emotionrecognition@cardiff.ac.uk</a></p>
                <p>any other contact deetails that you wish to add....</p>
            </div>
        </div>
    );
}

export default ContactSection;
