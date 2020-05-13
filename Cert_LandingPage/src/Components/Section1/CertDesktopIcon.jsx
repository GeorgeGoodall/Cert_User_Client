import React from 'react';


const CertScreenIcon = (props) => {
    return (

        <div className="monitor">
            <div className="monitorScreen">
                <img className="monitorImage" src={props.image}/>
            </div>
            <div className="monitorStand">
                <div className="monitorStand1"></div>
                <div className="monitorStand2"></div>
            </div>
        </div>


        
    );
}

export default CertScreenIcon;

// <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg">
// <g class="layer">
//     <title>Layer 1</title>
//     <g id="svg_12">
//         <rect fill="#000000" height="350" id="svg_1" stroke="#000000" stroke-width="5" width="540.000001" x="50" y="50"/>
//         <rect fill="#ffffff" height="281.25" id="svg_2" stroke="#000000" stroke-width="5" width="500" x="70" y="70"/>
//     </g>
//     <rect fill="#000000" height="15" id="svg_15" stroke="#000000" stroke-width="5" width="121" x="259.5" y="408"/>
//     <rect fill="#000000" height="5" id="svg_16" stroke="#000000" stroke-width="5" width="240" x="199.999989" y="430.333328"/>
//     <rect fill="#000000" fill-opacity="0" height="9" id="svg_22" stroke="#000000" stroke-opacity="0" stroke-width="5" width="82" x="0" y="0"/>
// </g>
// </svg>
