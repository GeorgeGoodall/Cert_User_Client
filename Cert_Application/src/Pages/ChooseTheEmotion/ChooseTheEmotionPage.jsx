import React, {useState, useRef} from 'react';
import nl2br from 'react-newline-to-break';
import classNames from 'classnames';

import ChooseTheEmotion from "../../Components/ChooseTheEmotion/ChooseTheEmotion.jsx";
import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";

import {language, ageType} from "../../config/tasks.js";
import {getGender} from "../../config/People.js";

import classes from "./ChooseTheEmotionPage.css";
import globalStyles from "../../Assets/css/globalStyles.css";
import {getHeaderClass} from "../../config/CSSTextClassBoundrys"


function ChooseTheEmotionPage(props){

	
	const [saveAnswer] = useState(props.saveAnswer);

	let alexPopupRef = useRef();

	let params = props.currentSlide.params;
	let {options, correctAnswer} = params;
	let emotionToChoose = params.options[correctAnswer][1];

	let submitAnswer = (answerIndex) => {
		alexPopupRef.current.openAlerts(emotionToChoose == params.options[answerIndex][1]);
		const answerObject = {
			answerIndex,
			answerText: options[answerIndex][0] + "_" + options[answerIndex][1]
		}
		props.submitAnswer(props.slideNumber,answerObject);
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
	}

	let gender = getGender(options[correctAnswer][0]);

	let correctPopupText = language.correct_alert + "\n" + language.getCorrectFeedback(emotionToChoose, gender, ageType);
	let incorrectPoputText = language.incorrect_alert;

	let header;
	if(ageType == "child")
		header = language.whoIs[emotionToChoose];
	else
		header = language.whichFaceIs[emotionToChoose];

	return (
		<React.Fragment>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<ChooseTheEmotion 
				options={options}
				submitAnswer={submitAnswer}
			/>
			<AlexPopup 
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText={incorrectPoputText}
			/>
		</React.Fragment>
	);
}



export default ChooseTheEmotionPage;