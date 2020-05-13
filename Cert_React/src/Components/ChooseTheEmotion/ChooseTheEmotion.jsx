import React, {useState} from 'react';
import classNames from 'classnames';

import EmotionChoice from "./EmotionChoice.jsx";

import classes from "./ChooseTheEmotion.css";
import globalStyles from "../../Assets/css/globalStyles.css";


function EmotionStory(props){

    const {options, submitAnswer} = props;
    
    let choice = [];
    options.map((option, key)=>{
        let onClickHandler = () => submitAnswer(key)
        if(option[3])
            onClickHandler = () => {};

        choice.push(<EmotionChoice onClickHandler={onClickHandler} option={option} index={key} key={key}/>);
    })

	return (
        <div className={classes.ChooseTheEmotion}>
            <div className={classes.ChooseTheEmotionRow} style={{display: "flex"}}>
                {choice[0]}
                {choice[1]}
            </div>
            <div className={classes.ChooseTheEmotionRow} style={{display: "flex"}}>
                {choice[2]}
                {choice[3]}
            </div>
        </div>
	);
}



export default EmotionStory;