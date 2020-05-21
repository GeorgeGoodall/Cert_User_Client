import React, {useState, useEffect} from 'react';

import nl2br from 'react-newline-to-break';

import globalStyle from '../globalStyles.css';
import classes from "./QuizPage.css";

import AnswerSection from "../AnswerSection/AnswerSection.jsx";

import {language} from "../tasks.js";
import {getEmotionStrings} from "../tasks";
import {getHeaderClass, getSubHeaderClass} from "../CSSTextClassBoundrys"

function TestQuestionPage(props){

	const {answersSubmitted, submitAnswer, slideNumber, image, emotion} = props;

	let header = language.HowDoTheyFeel.HowDoTheyFeel;

	let answers = language.getEmotionStrings(true);

	let onClickHandler = (i) => {
		console.log(language.getEmotionStringsEnglish(true)[i], emotion)
		const answerObject = {
			answerIndex: i,
			answerText: language.getEmotionStringsEnglish(true)[i],
			correct: language.getEmotionStringsEnglish(true)[i] == emotion
		}
		submitAnswer(slideNumber,answerObject);
	}


	for(let i = 0; i < answers.length; i++){
		answers[i] = {
			text:answers[i],
			id:i,
			inactive:typeof answersSubmitted != "undefined",
			selected:i == answersSubmitted, 
			onClickHandler:()=>onClickHandler(i),
		};
	}

	return (
		<div className={classes.container}>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<img src={image} className={classes.image}/>
			<AnswerSection
				answers={answers}
			/>
		</div>
	);
}



export default TestQuestionPage;