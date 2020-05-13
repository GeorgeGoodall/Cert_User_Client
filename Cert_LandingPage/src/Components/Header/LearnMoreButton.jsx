import React from 'react';
import {FaArrowDown} from 'react-icons/fa';

const LearnMoreButton = () => {
    return (
        <a href="#section2" className="learnMoreLink">
            <div className="learnMoreButton">
                <h1 className="learnMoreText">Find out more</h1>
                <FaArrowDown className="learnMoreArrow"/>
            </div>
        </a>
    );
}

export default LearnMoreButton;
