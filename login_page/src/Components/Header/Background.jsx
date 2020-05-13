import React from 'react';

const Background = () => {
    return (
        <div>
             <div className="background">
                <div className="backgroundTop"></div>
                <svg className="backgroundWave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path  d="M0,96L60,101.3C120,107,240,117,360,128C480,139,600,149,720,176C840,203,960,245,1080,224C1200,203,1320,117,1380,74.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default Background;
