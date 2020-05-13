import React, {Component, useState} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./EmotionalExperience.css";

import {language} from "../../config/tasks.js";
import {getHeaderClass} from "../../config/CSSTextClassBoundrys"


let EmotionalExperience = (props) => {
	
	const {currentSlide, image, slideNumber, submitAnswer, answerSubmitted, repeatEmotion} = props;
	const {name, gender, emotion} = currentSlide.params;

	let [text, setText] = useState(answerSubmitted);

	console.log(repeatEmotion);
	const header = language.getEmotionalExperianceHeader(emotion,repeatEmotion);

	const onChangeCallback = (event) => {
		setText(event.target.value);
		submitAnswer(slideNumber,event.target.value);
	}

	return (
		<div>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<div className={classes.middleColumn}>
				<img src={image} className={classes.image}/>
				<textarea onChange={onChangeCallback} id="textEntry" type="text" className={classes.textArea} value={text}></textarea>
			</div>
		</div>
	);
			

}






export default EmotionalExperience;