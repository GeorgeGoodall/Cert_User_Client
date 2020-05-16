import React, {useState, useEffect, useRef} from 'react';
import AnswerSection from "../../Components/AnswerSection/AnswerSection.jsx";
import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";

import nl2br from 'react-newline-to-break';
import globalStyles from '../../Assets/css/globalStyles.css';
import classes from './CenterHowDoTheyFeelPage.css'

import {language, ageType} from "../../config/tasks.js";
import {getGender} from "../../config/People.js";


function CenterHowDoTheyFeelPage(props){

	const {currentSlide, image, answersSubmitted} = props;
	const {person, emotion} = currentSlide.params;

	let answers = language.getEmotionStrings();

	let alexPopupRef = useRef();

	let [correctAlertHidden, setCorrectAlertHidden] = useState(true);
	let [incorrectAlertHidden, setIncorrectAlertHidden] = useState(true);

	let answer = async (answerIndex) => {
		await props.submitAnswer(props.slideNumber,answerIndex);
		alexPopupRef.current.openAlerts(answerIndex == language.getEmotionStrings().indexOf(emotion));
	}


	answers = JSON.parse(JSON.stringify(answers)); // make copy not reference
	let correctAnswer = answers.indexOf(language.emotions[props.currentSlide.params.emotion]);

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
	if(answersSubmitted[answersSubmitted.length-1] == currentSlide.params.correctAnswer)
		answeredCorrectly = true;

	

	let correctPopupText = language.correct_alert + language.getCorrectFeedback(emotion, getGender(person), ageType);
	let incorrectPoputText = language.incorrect_alert;

	let header = language.howDoesNameFeel(person);


	return (
		<div>
			<h1 className={globalStyles.header}>{header}</h1>
			<div>
				<img src={image} className={classes.image} />
				<AnswerSection answers={answers}/>
			</div>
			<AlexPopup 
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText={incorrectPoputText}
			/>
		</div>
	);
		

}



export default CenterHowDoTheyFeelPage;