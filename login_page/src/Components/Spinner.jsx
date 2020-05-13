import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = (props) => {
    return (
        <div className={"floatsRight"} style={props.active ? { display: "block" } : { display: "none" }}>
            <ClipLoader />            
        </div>
    );
}

export default Spinner;
