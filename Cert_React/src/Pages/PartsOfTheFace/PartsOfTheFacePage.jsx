import React, {useState, useEffect, useRef} from 'react';
import nl2br from 'react-newline-to-break';

import classes from "./PartsOfTheFace.css";
import globalStyle from '../../Assets/css/globalStyles.css';
import AnswerSection from "../../Components/AnswerSection/AnswerSection.jsx";
import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";
import Button from "../../Components/Button/Button.jsx";

import {language, ageType} from "../../config/tasks.js";
import {getHeaderClass} from "../../config/CSSTextClassBoundrys"


function PartsOfTheFacePage(props){

	const {currentSlide, answersSubmitted, submitAnswer, slideNumber} = props;
	const {people, emotion, feature, correctAnswer} = currentSlide.params; 
	let {answers} = props.currentSlide.params;
	const {images} = props;

	let alexPopupRef = useRef();
	let alexHelpPopupRef = useRef();

	let [helpButtonHidden, setHelpButtonHidden] = useState(answersSubmitted[answersSubmitted.length-1] != correctAnswer);

	const header = language.getPartsOfTheFaceHeader(people, emotion, feature);
	let answeredCorrectly = false;

	const onAnswerHandler = (answer) => {
		console.log(answer, correctAnswer);
		let answeredCorrectly = answer == correctAnswer;
		setHelpButtonHidden(false);
		alexPopupRef.current.openAlerts(answeredCorrectly);
		submitAnswer(slideNumber,answer);
	}

	answers = JSON.parse(JSON.stringify(answers)); // make copy not reference

	for(let i = 0; i < answers.length; i++){
		answers[i] = {
			text:answers[i],
			id:i,
			inactive:answersSubmitted.indexOf(i) > -1 || answersSubmitted[answersSubmitted.length-1] == correctAnswer,
			selected:i == correctAnswer && answersSubmitted[answersSubmitted.length-1] == correctAnswer, 
			onClickHandler:()=>onAnswerHandler(i),
		};
	}

	let correctPopupText = language.correct_alert + "\n" + language.getCorrectFeedback(emotion, "both", ageType);
	let incorrectPoputText = language.incorrect_alert;
	let helpPopupText = language.getIncorrectFeedback(emotion);

	let openHelp = () => {
		alexHelpPopupRef.current.openAlerts(true)
	}
			

	return (
		<div >
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<div className={classes.imageArea}>
				<img src={images[0]} className={classes.image}/>
				<img src={images[1]} className={classes.image}/>
			</div>
			<div style={{display: helpButtonHidden ? "none" : "block"}}>
				<Button text="Help" onClickHandler={openHelp}/>
			</div>
			<AnswerSection 
				answers={answers}
			/>
			<AlexPopup 
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText={incorrectPoputText}
			/>
			<AlexPopup 
				ref={alexHelpPopupRef}
				correctText={helpPopupText}
				incorrectText=""
			/>
		</div>
	);
			

}



export default PartsOfTheFacePage;