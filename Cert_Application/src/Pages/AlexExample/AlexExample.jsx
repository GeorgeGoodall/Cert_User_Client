import React from 'react';
import AlexHappy from "../../Assets/Images/james_happy.png";
import AlexInfo from "../../Components/AlexInfo/AlexInfo.jsx";
import nl2br from 'react-newline-to-break';
import globalStyle from '../../Assets/css/globalStyles.css';
import classes from './AlexExample.css';
import {getHeaderClass} from "../../config/CSSTextClassBoundrys"



function AlexExample(props){
	const {exampleImage, slideNumber, currentSlide, alexImage} = props;
	let {header, AlexSpeechBubble} = props;

	let re = /<br>|<\/br>/gi;
	
	if(typeof currentSlide.params.header != "undefined")
		header = currentSlide.params.header.replace(re,"\n");
	else if(typeof header == "undefined")
		header = "";

	if(typeof currentSlide.params.AlexSpeechBubble != "undefined")
		AlexSpeechBubble = currentSlide.params.AlexSpeechBubble.replace(re,"\n");
	else if(typeof AlexSpeechBubble == "undefined")
		AlexSpeechBubble = "";

	return (
		<div className={classes.page}>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<div className={classes.middleColumn}>
				<img src={exampleImage} className={classes.image} key={exampleImage}/>
				<AlexInfo text={AlexSpeechBubble} slideNumber={slideNumber} alexFace={alexImage}/>
			</div>
		</div>
	);		
	

}



export default AlexExample;
