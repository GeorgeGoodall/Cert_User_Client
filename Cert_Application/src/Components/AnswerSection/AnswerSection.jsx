import React, {Component} from 'react';
import Button from "../Button/Button.jsx";
import classes from "./AnswerSection.css";
import classNames from 'classnames';

function AnswerSection(props){


	return (
		<div className={classNames({[classes.answerSection]:true,[props.containerClassName]:true})}>
			{props.answers.map((answer, key)=>{
				return <Button text={answer.text} className={props.className} key={key} button={answer} onClickHandler={answer.onClickHandler}/>
			})}
		</div>
	);		

}



export default AnswerSection;
