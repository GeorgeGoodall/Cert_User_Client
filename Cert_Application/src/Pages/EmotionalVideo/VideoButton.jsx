import React, {Component} from 'react';

import globalStyle from '../../Assets/css/globalStyles.css';
import ReactPlayer from 'react-player';

import classes from "./EmotionalVideo.css";

//import {getEmotionalExperianceHeader} from "../../config/getStrings.js";


function VideoButton(props){

	return (
		<div onClick={props.onClickHandler} className={classes.button}>
			<h1>{props.text}</h1>
		</div>
	);
			

}



export default VideoButton;