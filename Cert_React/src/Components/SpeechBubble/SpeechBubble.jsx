import React from 'react';
import {useSpring, animated} from 'react-spring'
import nl2br from 'react-newline-to-break';

import classes from './SpeechBubble.css';


function SpeechBubble(props) {


	let re = /<br>|<\/br>/gi;
	let text = props.text.replace(re,"\n");

	
	let borderRadius = "30px";
	let boxShadow = "10px 10px 10px #888";
	let bubbleMainStyle = {
		
	    minHeight: "20px",
	    padding: "20px",
	    textAlign: "center",
	    backgroundColor: "#fff",
	    border: "8px solid #666",
	    WebkitBorderRadius: borderRadius,
	    MozBorderRadius: borderRadius,
	    borderRadius: borderRadius,
	    WebkitBoxShadow: boxShadow,
	    MozBoxShadow: boxShadow,
	    boxShadow: boxShadow,
	  	margin: "auto",
	  	fontSize: 30,
	}

	let arrowBeforeStyle = {
		position: "absolute",
			width: 0,
			height: 0,
			left: "calc(50% - 32px)",
			top: -62,
			border: "32px solid",
			borderColor: "transparent transparent #666 transparent",
	}

	let arrowAfterStyle = {
		position: "absolute",
		width: 0,
		height: 0,
		left: "calc(50% - 32px)",
		top: -52,
		border: "32px solid",
		borderColor: "transparent transparent #fff transparent",
	}

	let speechBubbleStyle = {
		alignSelf: "center",
		position: "relative",
		marginTop: 20,
		opacity: 1,
		transform: 'translate3d(0,0,0)',
		from: {
			opacity: 0,
			transform: 'translate3d(0,-10px,0)',
		},
		config: {
			duration: 300
		},
	}


	if(window.matchMedia('(max-width: 800px)').matches){
		bubbleMainStyle.fontSize = "18px";
		bubbleMainStyle.padding = "10px";
	}
	if(window.matchMedia('(max-height: 850px)').matches){
		bubbleMainStyle.fontSize = "18px";
		bubbleMainStyle.padding = "10px";
	}
	if(window.matchMedia('(max-width: 440px)').matches){
		bubbleMainStyle.fontSize = "14px";
		bubbleMainStyle.padding = "5px";
	}
	if(window.matchMedia('(max-height: 580px)').matches){
		bubbleMainStyle.fontSize = "13px";
		bubbleMainStyle.padding = "5px";
	}
	
	

	if(typeof props.maxWidth != "undefined")
		bubbleMainStyle.maxWidth = props.maxWidth;

	let p = useSpring(speechBubbleStyle);

	return (
    	<animated.div style={p} className={classes.bubbleContainer}>
	    	<div style={arrowBeforeStyle}></div>
	    	<div>
	    		<p className={classes.bubbleMain}>{nl2br(text)}</p>
	    	</div>
	    	<div style={arrowAfterStyle}></div>
	    </animated.div>
	);		


}



export default SpeechBubble;
