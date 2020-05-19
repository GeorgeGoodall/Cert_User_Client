import React, {useState, useEffect} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./ReviewPage.css";

import {language, ageType} from "../../config/tasks.js";
import { getGender } from '../../config/People';

import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"



function Session2ReviewPage(props){

    const {emotion, person, currentSlide} = props;
    let {image} = props;

    const index = currentSlide.index;

    let _image = new Image()
    _image.src = image;
    image = _image;

    let gender = getGender(person);

    let header = language.reviewHeader;
    let subHeader = language.getPersonIsEmotion(person, emotion);
    let whatWeLearned = language.weLearnedHowEachPartOfTheFaceLooksWhen[emotion];

    let canvas;
    let ctx;

    useEffect(()=>{
		canvas = document.getElementById("game_canvas_"+index);
        ctx = canvas.getContext("2d");

        if(image.complete)
            draw_images();
        else{
            image.onload = function() {
                draw_images();
            }
        }
        
    });

    let draw_images = () => {



        let scale = 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let margin = 3;

        let templateWidth = 1000;
        let templateHeight = 1000 * image.naturalWidth / image.naturalHeight;

        const {naturalWidth, naturalHeight} = image;
        let cropStartX = 0;
        let cropHeight = naturalHeight/2;
        let cropWidth = naturalWidth;

        let width = 1000;
        let height = (1000 / image.naturalWidth) * (image.naturalHeight / 2);

        ctx.drawImage(
            image,
            cropStartX, 0, cropWidth, cropHeight,
            0, 0, width, height
        );

        ctx.drawImage(
            image,
            cropStartX, cropHeight, cropWidth, cropHeight,
            0, height + margin, width, height
        );
    }

    let topHalf;
    let feedbackTop = language.getCorrectFeedback(emotion, gender, ageType, false, ["eyes", "eyebrows"]);
    if(feedbackTop != ""){
        topHalf = (
            <React.Fragment>
                <h2 className={classes.textTitle}>{nl2br(language.theTopHalfOfTheirFaceLooksLikeThis[gender])}</h2>
                <p className={classes.textContent}>{nl2br(feedbackTop)}</p>
            </React.Fragment>
        )
    }

    let bottomHalf;
    let feedbackBot = language.getCorrectFeedback(emotion, gender, ageType, false, ["mouth"]);
    if(feedbackBot != ""){
        bottomHalf = (
            <React.Fragment>
                <h2 className={classes.textTitle}>{nl2br(language.theBottomHalfOfTheirFaceLooksLikeThis[gender])}</h2>
				<p className={classes.textContent}>{nl2br(feedbackBot)}</p>
            </React.Fragment>
        )
    }


	return (
		<div >
			<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
			<div className={classes.container} >
                <div className={classes.leftArea}>
                    <h2 className={getSubHeaderClass(subHeader)}>{nl2br(subHeader)}</h2>
                    <canvas id={'game_canvas_'+index} height={1000 / 1.3} width='1000'  className={classes.canvas} ></canvas>
                </div>
				<div className={classes.textBox}>
                    <h2 className={classes.textTitle}>{nl2br(whatWeLearned)}</h2>
                    <br/>
                    {topHalf}
					<br/>
                    {bottomHalf}
				</div>
			</div>
		</div>
	);
}



export default Session2ReviewPage;