import React from 'react';


const TextInput = React.forwardRef((props, ref) => {


    
    return (
        <div className="textInput">
            <div className="textInputLabel">{props.label}</div>
            <input className="textInputBox" type={props.type || "text"} ref={ref}/>
        </div>
    );
})

export default TextInput;
