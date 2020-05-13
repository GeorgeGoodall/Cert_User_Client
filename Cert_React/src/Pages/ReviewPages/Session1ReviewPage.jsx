import React, {useState, useEffect} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./ReviewPage.css";

import {language} from "../../config/tasks.js";
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"


function Session1ReviewPage(props){

	const {image, currentSlide, answerText} = props;
	const {person, emotion} = currentSlide.params;

	let header = language.reviewHeader;
	let subHeader = language.getPersonIsEmotion(person, emotion);

	let aFaceLooksLikeString = language.getIncorrectFeedback(emotion, true, []);
	let whatTheFaceLooksLikeString = language.getIncorrectFeedback(emotion, false);

	return (
		<div >
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<h2 className={getSubHeaderClass(subHeader)}>{nl2br(subHeader)}</h2>
			<div className={classes.container} >
				<img src={image} className={classes.image}/>
				<div className={classes.textBox}>
					<h2 className={classes.textTitle}>{aFaceLooksLikeString}</h2>
					<p className={classes.textContent}>{nl2br(whatTheFaceLooksLikeString)}</p>
					<br/>
					<h2 className={classes.textTitle}>{nl2br(language.youToldUsAboutTheTimeYouWere[emotion])}</h2>
					<p className={classes.textContent}>{answerText}</p>					
				</div>
			</div>
		</div>
	);
}



export default Session1ReviewPage;