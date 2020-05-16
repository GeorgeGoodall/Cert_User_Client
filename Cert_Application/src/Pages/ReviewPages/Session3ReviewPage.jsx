import React, {useState, useEffect} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./ReviewPage.css";

import {language} from "../../config/tasks.js";
import { getGender } from '../../config/People';

import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"
import { getAgeType } from '../../config/language';



function Session3ReviewPage(props){
    const {image, person, emotion} = props;

	let header = language.reviewHeader;
    let subHeader = language.getPersonIsEmotion(person, emotion);
    
    let aFaceLooksLike = language.getIncorrectFeedback(emotion, true, []);
    let whatTheFaceLooksLike = language.getIncorrectFeedback(emotion, false, ["eyes", "mouth", "eyebrows"]);

    let youHaveLearned = language.youHaveLearnedThatYouMightFeel[emotion];
    let scenario = "";
    if(getAgeType() == "child"){
        switch (emotion){
            case "happy":
                scenario = language.emotionStoriesBubble.getToy;            
                break;
            case "sad":
                scenario = language.emotionStoriesBubble.movedAway;                
                break;
            case "angry":
                scenario = language.emotionStoriesBubble.breaksToy;            
                break;
            case "scared":
                scenario = language.emotionStoriesBubble.nightmare;            
                break;
        }
    }
    else{
        switch (emotion){
            case "happy":
                scenario = language.emotionStoriesForReview.concert;            
                break;
            case "sad":
                scenario = language.emotionStoriesForReview.notInvited;                
                break;
            case "angry":
                scenario = language.emotionStoriesForReview.missedTheBus;            
                break;
            case "scared":
                scenario = language.emotionStoriesForReview.driving;            
                break;
        }
    }

    aFaceLooksLike = <h2 className={classes.textTitle}>{aFaceLooksLike}</h2>
    whatTheFaceLooksLike = <p className={classes.textContent}>{nl2br(whatTheFaceLooksLike)}</p>
    youHaveLearned = <h2 className={classes.textTitle}>{youHaveLearned}</h2>
    scenario = <p className={classes.textContent}>{nl2br(scenario)}</p>

	return (
		<div >
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<h2 className={getSubHeaderClass(subHeader)}>{nl2br(subHeader)}</h2>
			<div className={classes.container} >
				<img src={image} className={classes.image}/>
				<div className={classes.textBox}>
					{aFaceLooksLike}
                    {whatTheFaceLooksLike}
					<br/>
					{youHaveLearned}
                    {scenario}
				</div>
			</div>
		</div>
	);
}



export default Session3ReviewPage;