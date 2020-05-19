import React, { useState, useEffect } from 'react';
import nl2br from 'react-newline-to-break';
import ReactPlayer from 'react-player';

import globalStyle from '../../Assets/css/globalStyles.css';

import classes from "./EmotionalVideo.css";
import VideoButton from "./VideoButton.jsx";
import AnswerSection from "../../Components/AnswerSection/AnswerSection.jsx";
import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";

import { language, ageType, getEmotionStrings } from "../../config/tasks.js";
import { getGender } from "../../config/People.js";
import { useRef } from 'react';
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"


let EmotionalVideo = (props) => {
	const { currentSlide, video, image, slideNumber, answersSubmitted, submitAnswer } = props;

	// state
	let [isPlaying, setIsPlaying] = useState(false);
	let [showAnswers, setShowAnswers] = useState(false);
	let [secondFrame, setSecondFrame] = useState(false);

	let player
	
	let alexPopupRef = useRef();
	let ref = p => {
		player = p
	}
	let handleResetClick = () => {
		player.seekTo(0);
	}

	let onAnswerHandler = async (i) => {
		let answeredCorrectly = i == language.getEmotionStrings().indexOf(currentSlide.params.emotion);
		const timeTaken = player.getCurrentTime();
		alexPopupRef.current.openAlerts(answeredCorrectly);
		if (!answeredCorrectly) {
			handleResetClick();
		}
		else {
			setSecondFrame(true);
		}
		setShowAnswers(false);

		const answerObj = {
			answerIndex: i,
			answerText: getEmotionStrings()[i],
			timeTaken,
		}

		submitAnswer(slideNumber, i);
	}

	let handlePlayClick = () => {
		setShowAnswers(isPlaying);
		setIsPlaying(!isPlaying)
	}

	//#region answers
	let answers = language.getEmotionStrings();
	let correctAnswer = answers.indexOf(language.emotions[props.currentSlide.params.emotion]);
	let answeredCorrectly;

	for (let i = 0; i < answers.length; i++) {
		let inactive = false;
		let selected = false;
		for (let j in answersSubmitted) {
			if (answersSubmitted[j][0] == i) {
				inactive = true;
				break;
			}
		}
		if (typeof answersSubmitted[answersSubmitted.length - 1] != "undefined") {
			if (answersSubmitted[answersSubmitted.length - 1][0] == correctAnswer) {
				inactive = true;
				if (i == correctAnswer) {
					selected = true;
					answeredCorrectly = true;
				}
			}
		}

		answers[i] = {
			text: answers[i],
			id: i,
			inactive: inactive,
			selected: selected,
			onClickHandler: () => onAnswerHandler(i),
		};
	}

	//#endregion

	if (answeredCorrectly) secondFrame = true;

	// get text
	let header = language.getVideoheader(secondFrame, slideNumber == 1);
	let subHeader = !secondFrame ? language.howDoesNameFeel(currentSlide.params.name) : "";

	let correctPopupText = language.correct_alert + language.getCorrectFeedback(currentSlide.params.emotion, getGender(currentSlide.params.name), ageType);
	let incorrectPoputText = language.incorrect_alert;

	return (
		<div id={slideNumber}>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<h2 className={getSubHeaderClass(header)}>{nl2br(subHeader)}</h2>
			<div className={classes.container}>
				<div className={classes.player}>
					<ReactPlayer
						ref={ref}
						url={video}
						playing={isPlaying}
						height="90%"
						width="100%"
					/>
					<div className={classes.videoControls} style={{ display: true || !secondFrame ? "block" : "none" }}>
						<VideoButton text={isPlaying ? "Pause" : "Play"} onClickHandler={handlePlayClick} />
						<VideoButton text="Reset" onClickHandler={handleResetClick} />
					</div>
				</div>
				<img src={image} className={classes.image} style={{ visibility: secondFrame ? "visible" : "hidden" }} />
			</div>
			<div style={{ display: (showAnswers || secondFrame) ? "block" : "none", marginTop: "40px"}}>
				<AnswerSection answers={answers} />
			</div>
			<AlexPopup
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText={incorrectPoputText}
			/>
		</div>

	);


}

const isEqual = (prevProps, nextProps) => {
	
}



export default EmotionalVideo;