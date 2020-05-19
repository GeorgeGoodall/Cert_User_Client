import React, {Component, useRef} from 'react';
import AnswerSection from "../../Components/AnswerSection/AnswerSection.jsx";
import AlexExampleAnswerFeedback from "../AlexExample/AlexExampleAnswerFeedback.jsx";
import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";
import Button from "../../Components/Button/Button";

import nl2br from 'react-newline-to-break';
import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./howDoTheyFeelPage.css";

import {language, ageType, getEmotionStrings} from '../../config/tasks.js';
import { getGender } from "../../config/People.js";

import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"


function HowDoTheyFeelPage(props){
	
	let alexPopupRef = useRef();
	let alexHelpPopupRef = useRef();
	let answers = language.getEmotionStrings();
	const correctAnswer = answers.indexOf(language.emotions[props.currentSlide.params.emotion]);

	
	let answer = (answerIndex) => {
		alexPopupRef.current.openAlerts(answerIndex == correctAnswer);
		const answerObject = {
			answerIndex,
			answerText: getEmotionStrings()[answerIndex]
		}
		props.submitAnswer(props.slideNumber, answerObject);
	}

	let helpClick = () => {
		alexHelpPopupRef.current.openAlerts(true);
	}

	const {currentSlide, image, AlexImage, slideNumber, answersSubmitted} = props;
	const {emotion, person, extraHelp, noHint} = currentSlide.params;
	
	const header = language.howDoesNameFeel(person);
	const AlexSpeechBubble = language.HowDoTheyFeel.HowDoTheyFeelHint;


	for(let i = 0; i < answers.length; i++){
		answers[i] = {
			text:answers[i],
			id:i,
			inactive:answersSubmitted.indexOf(i) > -1 || answersSubmitted[answersSubmitted.length-1] == correctAnswer,
			selected:i == correctAnswer && answersSubmitted[answersSubmitted.length-1] == correctAnswer, 
			onClickHandler:()=>answer(i),
		};
	}

	let answeredCorrectly = false;
	if(answersSubmitted.length > 0 && answersSubmitted[answersSubmitted.length-1] == correctAnswer)
		answeredCorrectly = true;

	let correctPopupText = language.correct_alert + "\n" + language.getCorrectFeedback(emotion, getGender(person), ageType); // todo: push extra descriptor in here
	let incorrectPoputText = language.incorrect_alert;

	let re = /<br>|<\/br>/gi;
	if(typeof currentSlide.params.header != "undefined")
		header = currentSlide.params.header.replace(re,"\n");
	else if(typeof header == "undefined")
		header = "";

	let helpText;
	if(extraHelp)
		helpText = language.getIncorrectFeedback(emotion);
	else
		helpText = language.getWhatEmotionHint(emotion, getGender(person), ageType);

	let showHelpButton = (answersSubmitted.length > 0 && answersSubmitted[answersSubmitted.length-1] != correctAnswer)

	let hint;
	if(!noHint){
		hint = <h1 className={getSubHeaderClass(language.HowDoTheyFeel.HowDoTheyFeelHint)}>{language.HowDoTheyFeel.HowDoTheyFeelHint}</h1>;
	}

	return (
		<div className={classes.container}>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			{hint}
			<img className={classes.image} src={image}/>
			<div style={showHelpButton ? {display: "block"} : {display: "none"}}>
				<Button text={language.help} className={classes.helpButton} onClickHandler={helpClick}/>
			</div>
			<AnswerSection answers={answers}/>
			<AlexPopup
				ref={alexHelpPopupRef}
				correctText={helpText}
				incorrectText={""}
			/>
			<AlexPopup
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText={incorrectPoputText}
			/>
		</div>
	);
		

}



export default HowDoTheyFeelPage;