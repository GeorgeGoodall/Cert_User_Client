import React, {useState} from 'react';
import classNames from 'classnames';

import Button from "../Button/Button.jsx";
import classes from "./ChooseTheEmotion.css";

import {capitaliseFirstLetter} from "../../config/LanguageClass";

function EmotionChoice(props){

	let _text;
	if(typeof props.option[5] == "undefined")
		_text = props.option[0];
	else
		_text = props.option[5];
	return (
		<div className={classes.EmotionChoice} key={props.index} >
			<div>
				<Button 
					onClickHandler={props.onClickHandler}
					className={classNames({[classes.button] : true})}
					text={_text}
					inactive={props.option[3]}
					selected={props.option[4]}
				/>
			</div>
			<img 
				className={classes.image}
				src={props.option[2]}
			/>
		</div>
	);
}



export default EmotionChoice;