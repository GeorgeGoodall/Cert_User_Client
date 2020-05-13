import React, {useState, useRef} from 'react';
import nl2br from 'react-newline-to-break';
import classNames from 'classnames';

import ChooseTheEmotion from "../../Components/ChooseTheEmotion/ChooseTheEmotion.jsx";
import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";

import {language, ageType} from "../../config/tasks.js";
import {getGender} from "../../config/People.js";

import classes from "./EmotionStoryPage.css";
import globalStyles from "../../Assets/css/globalStyles.css";
import AlexInfo from '../../Components/AlexInfo/AlexInfo.jsx';
import { getHeaderClass } from '../../config/CSSTextClassBoundrys.js';


function EmotionStory(props){

	let alexPopupRef = useRef();

	let params = props.currentSlide.params;
	let slideNumber = props.currentSlide.index;
	let {options, correctAnswer, header, AlexSpeechBubble} = params;
	let emotionToChoose = params.options[correctAnswer][1];

	let submitAnswer = (answerIndex) => {
		alexPopupRef.current.openAlerts(emotionToChoose == params.options[answerIndex][1]);
		props.submitAnswer(props.slideNumber,answerIndex);
	}


	const {answersSubmitted} = props;

	options = JSON.parse(JSON.stringify(options)); // make copy not reference

	for(let i = 0; i < options.length; i++){
		if(answersSubmitted[answersSubmitted.length-1] == params.correctAnswer)
			options[i].push(true);
		else if(answersSubmitted.indexOf(i) > -1)
			options[i].push(true);
		else
			options[i].push(false);
		
		if(i == params.correctAnswer && answersSubmitted[answersSubmitted.length-1] == params.correctAnswer)
			options[i].push(true);
		else
			options[i].push(false);

		options[i].push(String.fromCharCode(65+i));
	}

	let gender = getGender(options[correctAnswer][0]);

	let correctPopupText = language.correct_alert + language.getCorrectFeedback(emotionToChoose, gender, ageType);
	let incorrectPoputText = language.youMightFeelThisWay;

	return (
		<div>
			<h1 className={getHeaderClass(header)}>{header}</h1>
			<div className={classes.main}>
				<div className={classes.AlexInfo}>
					<AlexInfo 
						text={AlexSpeechBubble}
						slideNumber={slideNumber} 
					/>
				</div>
				<div className={classes.ChooseTheEmotionContainer}>
					<ChooseTheEmotion 
						options={options}
						submitAnswer={submitAnswer}
					/>
				</div>
			</div>
			<AlexPopup 
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText={incorrectPoputText}
			/>
		</div>
	);
}



export default EmotionStory;