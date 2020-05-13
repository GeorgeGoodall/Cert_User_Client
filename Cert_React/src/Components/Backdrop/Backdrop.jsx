import React, {forwardRef, useImperativeHandle, useState} from 'react';

import classes from "./Backdrop.css";

const Backdrop = forwardRef((props, ref) => {

    let [backdropOpen, setBackdropOpen] = useState(false)

    useImperativeHandle(ref, ()=>({
		setBackdrop: (open) => {
			setBackdropOpen(open);
		},
    }));

    let backdropClick = () => {console.log("no callback set")};
    if(typeof props.closeCallback != "undefined")
        backdropClick = () => {
            setBackdropOpen(false);
            props.closeCallback();
        }
    

    
    
    return (
        <div className={backdropOpen ? classes.background : ""} onClick={ () => backdropClick()}></div>
    );
})

export default Backdrop;
