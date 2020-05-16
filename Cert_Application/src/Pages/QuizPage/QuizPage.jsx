import React, {useState, useEffect} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./QuizPage.css";

import AnswerSection from "../../Components/AnswerSection/AnswerSection.jsx";

import {language} from "../../config/tasks.js";
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"

const images = {};
importAll(require.context('../../Assets/Images/Quiz/', false, /\.(png|jpe?g|svg|mp4)$/));
function importAll(r) {
  return r.keys().forEach((key) => {
  	let k = key.substring(2); // remove the ./ from the start
  	images[k] = r(key)
  });
}

console.log("Import");

function QuizPage(props){

	console.log(images);

	const {currentSlide, answersSubmitted, submitAnswer, slideNumber} = props;
	const {person, emotion} = currentSlide.params;

	let header = language.HowDoTheyFeel.HowDoTheyFeel;
	let image = images[person + "_" + emotion + ".png"];

	let answers = language.getEmotionStrings(true);

	let onClickHandler = (i) => {
		submitAnswer(slideNumber,i);
	}


	for(let i = 0; i < answers.length; i++){
		answers[i] = {
			text:answers[i],
			id:i,
			inactive:answersSubmitted != "-1",
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



export default QuizPage;