import React, {useEffect, useState, useRef} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./MakeAFacePage.css";

import MakeAFaceCanvas from "./MakeAFaceCanvas.jsx";

import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";

import {language, ageType} from "../../config/tasks.js";
import {getGender} from "../../config/People.js";
import {getHeaderClass} from "../../config/CSSTextClassBoundrys"



const MakeAFacePage = React.memo( (props) => {

	const {answer, emotions, person} = props.currentSlide.params;

	let alexPopupRef = useRef();

	let tmp_header;
	if(typeof answer == "undefined"){
		tmp_header = language.makeAFaceInstructionString;
	}
	else{
		tmp_header = language.makeAFaceInstructionWithEmotionString[emotions[answer]];
	}
	let [header, setHeader] = useState(tmp_header)

	let [correctAlertHidden, setCorrectAlertHidden] = useState(true);
	

	const answered = (canProceed, chosen) => {
		let chosenText = [chosen.length];

		if(chosen[0] == null || chosen[1] == null)
			return;
		
		chosenText[0] = emotions[chosen[0] % 2];
		chosenText[1] = emotions[(chosen[1] + ((props.slideNumber + 1) % 2)) % 2];
		
		const answerObject = {
			answerIndex: chosen,
			answerText: chosenText
		}
		props.submitAnswer(props.slideNumber, answerObject, canProceed);
		if(canProceed){
			setHeader(language.correct_alert);
			alexPopupRef.current.openAlerts(true);
		}
		else if(typeof chosen[0] == "number" && typeof chosen[1] == "number"){
			setHeader(language.incorrect_alert);	
		}else{
			if(typeof answer == "undefined"){
				setHeader(language.makeAFaceInstructionString);
			}
			else{
				setHeader(language.makeAFaceInstructionWithEmotionString[emotions[answer]]);
			}
		}
	}

	let correctPopupText = language.correct_alert;
	if(typeof answer != "undefined")
		correctPopupText += language.getCorrectFeedback(emotions[answer], getGender(person), ageType);

	
	return (
		<div className={classes.page}>
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<div className={classes.canvasContainer}>
				<MakeAFaceCanvas 
					images={props.images}
					flipped={props.slideNumber % 2 == 0}
					answer={answer}
					answered={answered}
					chosen={props.chosen}
					slideNumber={props.currentSlide.index}
				/>
			</div>
			<AlexPopup 
				ref={alexPopupRef}
				correctText={correctPopupText}
				incorrectText=""
			/>
		</div>
	);
			

},
function arePropsEqual(prevProps, nextProps) { // second argument
    let blockRerender = prevProps.images[0] == nextProps.images[0];
    return blockRerender;

});



export default MakeAFacePage;