import React from 'react';
import AlexExample from "./AlexExample.jsx";

import {language} from "../../config/tasks.js";


function AlexExampleAnswerFeedback(props){
	
	const {exampleImage, AlexImage, answered, answeredCorrectly, attempt, header} = props;
	let {currentSlide, slideNumber, AlexSpeechBubble} = props;

	let currentSlideCopy = JSON.parse(JSON.stringify(currentSlide))//to copy and not reference
	if(answered){
		if(answeredCorrectly){
			AlexSpeechBubble = language.correct_alert;
			slideNumber = slideNumber + 1000 + attempt;
		}
		else{
			AlexSpeechBubble = language.incorrect_alert;
			slideNumber = slideNumber + 2000 + attempt;
		}
	}


	return (
		<AlexExample
			currentSlide={currentSlideCopy}
			header={header}
			AlexSpeechBubble={AlexSpeechBubble}
			exampleImage={exampleImage}
			AlexImage={AlexImage}
			slideNumber={slideNumber}
		/>
	);		
	

}



export default AlexExampleAnswerFeedback;
