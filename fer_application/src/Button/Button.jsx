import React, {Component} from 'react';
import classes from "./Button.css";
import classNames from 'classnames';


function Button(props){

	let inactive, selected = false;
	if(typeof props.button != "undefined"){
		inactive = props.button.inactive;
		selected = props.button.selected;
	}
	else if(typeof props.inactive != "undefined" && typeof props.selected != "undefined"){
		inactive = props.inactive;
		selected = props.selected;	
	}

	return (
		<div className={classNames({[props.className]:true,[classes.buttonInactive]: inactive && !selected || selected, [classes.button]: !inactive && !selected, [classes.selected]: selected})} onClick={() => {if(!inactive && !selected) props.onClickHandler()}}>
		    <h1>{props.text}</h1>
		</div>
	);		
}



export default Button;