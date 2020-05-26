import React, {useState, forwardRef, useImperativeHandle, useRef} from "react";
import { Redirect } from 'react-router-dom';

import classNames from 'classnames';
import AlexInfo from "../AlexInfo/AlexInfo.jsx";
import classes from "./AlexPopup.css";
import Backdrop from "../Backdrop/Backdrop.jsx";

import {FaTimes} from "react-icons/fa"


const AlexPopup = forwardRef((props, ref) => {

	let [correctAlertHidden, setCorrectAlertHidden] = useState(true);
	let [incorrectAlertHidden, setIncorrectAlertHidden] = useState(true);
	let [shouldRedirect, setShouldRedirect] = useState(false);

	console.log("render");
	
	if(props.correctAlertHidden == false)
		setCorrectAlertHidden(props.correctAlertHidden);
	if(props.incorrectAlertHidden == false)
		setIncorrectAlertHidden(props.incorrectAlertHidden);

	let backdropRef = useRef();

	const {correctText, incorrectText} = props;

	let closeAlerts = () => {
		setCorrectAlertHidden(true);
		setIncorrectAlertHidden(true);
		backdropRef.current.setBackdrop(false);
		if(props.redirectOnClose)
			setShouldRedirect(true);
	};
	
	let openAlerts = (correct = false) => {
		if(correct)
			setCorrectAlertHidden(false);
		else
			setIncorrectAlertHidden(false);

		backdropRef.current.setBackdrop(true);
	}

	
	useImperativeHandle(ref, ()=>({
		closeAlerts: () => {
			closeAlerts();
		},
		
		openAlerts: (correct) => {
			openAlerts(correct);
		}
	}));

	if(shouldRedirect)
		return <Redirect to="/session" push /> 

	return (
		<div style={!correctAlertHidden || !incorrectAlertHidden ? {display: "block"} : {display: "none"}}>
			<FaTimes className={classes.closeButton} onClick={closeAlerts}/>
			<div className={classNames({[classes.alert]:true, [classes.hidden]:correctAlertHidden})}>
				<AlexInfo text={correctText}/>
			</div>
			<div className={classNames({[classes.alert]:true, [classes.hidden]:incorrectAlertHidden})}>
				<AlexInfo text={incorrectText}/>
			</div>
			<Backdrop ref={backdropRef}/>
		</div>
	);
})



export default AlexPopup;

