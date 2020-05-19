import React, {useState} from 'react';
import AnswerSection from '../../Components/AnswerSection/AnswerSection';
import classes from "./EmotionalStoryAdolescent.css";
import {getHeaderClass} from "../../config/CSSTextClassBoundrys";
import {language} from "../../config/tasks"
import Button from '../../Components/Button/Button';
import classNames from "classnames"
import {getEmotionStrings} from "../../config/tasks"


const EmotionalStoriesAdolescentPage = (props) => {
    
    let [frame, setFrame] = useState(0);
    let [isSecond, setIsSecond] = useState(false);
    
    const {storyImage, answersSubmitted, currentSlide, slideNumber, setAnswer} = props;
    const {storyText, header} = currentSlide.params;
   
    
    let answers = language.getEmotionStrings();
    answers = JSON.parse(JSON.stringify(answers));
    let answers2 = JSON.parse(JSON.stringify(answers));
    
    let [answer1, setAnswer1] = useState(null);
    let [text1, setText1] = useState("");
    let [answer2, setAnswer2] = useState(null);
    let [text2, setText2] = useState("");

    const setFrameFromAnswers = (_answer1 = null, _text1 = null, _answer2 = null, _text2 = null) => {

        if(_answer1 == null)
            _answer1 = answer1;
        if(_answer2 == null)
            _answer2 = answer2;
        if(_text1 == null)
            _text1 = text1;
        if(_text2 == null)
            _text2 = text2;

        if(_answer1 == null)
            setFrame(0);
        else if(_text1.length == 0)
            setFrame(1);
        else if(_answer2 == null)
            setFrame(2);
        else if(_text2.length == 0)
            setFrame(3);
        else{
            // page is filled, should submit answer and set can continue
            const answer1Text = typeof getEmotionStrings()[_answer1] != "undefined" ? getEmotionStrings()[_answer1].text : "";
            const answer2Text = typeof getEmotionStrings()[_answer2] != "undefined" ? getEmotionStrings()[_answer2].text : "";
            const answerObj = {
                answerIndex: [_answer1, _text1, _answer2, _text2],
                answerText: [answer1Text,_text1,answer2Text,_text2]
            }
            setAnswer(slideNumber, answerObj, true);
        }
        
    }
    

    const submitAnswer = (answerId,answer) => {
        // submit answers
        let _answer1 = answer1;
        let _answer2 = answer2;
        let _text1 = text1;
        let _text2 = text2;

        switch (answerId) {
            case 0:
                setAnswer1(answer);
                _answer1 = answer;
                break;
            case 1:
                setText1(answer);
                _text1 = answer;
                break;
            case 2:
                setAnswer2(answer);
                _answer2 = answer;
                break;
            case 3:
                setText2(answer);
                _text2 = answer;
                break;
            default:
                break;
        }

        const answer1Text = typeof getEmotionStrings[_answer1] != "undefined" ? getEmotionStrings[_answer1].text : "";
        const answer2Text = typeof getEmotionStrings[_answer2] != "undefined" ? getEmotionStrings[_answer2].text : "";
        const answerObject = {
            answerIndex: [_answer1, _text1, _answer2, _text2],
            answerText: [answer1Text, _text1, answer2Text, _text2]
        }

        setAnswer(slideNumber, answerObject, false);
        setFrameFromAnswers(_answer1, _text1, _answer2, _text2);
    }
    
    for(let i = 0; i < answers.length; i++){
		answers[i] = {
			text:answers[i],
			id:i,
			inactive:answersSubmitted[0] == i || answersSubmitted[2] == i,
			selected:i == answersSubmitted[0], 
			onClickHandler:()=>submitAnswer(0,i),
		};
    }

    for(let i = 0; i < answers2.length; i++){
		answers2[i] = {
			text:answers2[i],
			id:i,
			inactive:answersSubmitted[0] == i || answersSubmitted[2] == i,
			selected:i == answersSubmitted[2], 
			onClickHandler:()=>submitAnswer(2,i),
		};
    }
    
    

    return (
        <div>
            <h1 className={getHeaderClass(header)}>{header}</h1>
            <p className={classes.storyText}>{storyText}</p>
            <div className={classNames({[classes.questionArea]:true,[classes.isFirst]:true})} style={frame >= 0 ? {display: "block"} : {display: "none"}}>
                <div className={classes.questionText}>How Would you feel if this happened to you?</div>
                <AnswerSection answers={answers}/>
            </div>
            <div className={classes.questionArea} style={frame >= 1 ? {display: "block"} : {display: "none"}}>    
                <div className={classes.questionText}>Why do you think you would feel this way if you were in this situation?</div>
                <textarea id="textEntry1" type="text" className={classes.textArea} value={text1} onChange={(event) => submitAnswer(1,event.target.value)}></textarea>
            </div>
            <div className={classes.questionArea} style={frame >= 2 ? {display: "block"} : {display: "none"}}>
                <div className={classes.questionText}>How else might you feel in this situation?</div>
                <AnswerSection answers={answers2}/>
            </div>
            <div className={classes.questionArea} style={frame >= 3 ? {display: "block"} : {display: "none"}}>    
                <div className={classes.questionText}>Why do you think you would feel this way if you were in this situation?</div>
                <textarea id="textEntry2" type="text" className={classes.textArea} value={text2} onChange={(event) => submitAnswer(3,event.target.value)}></textarea>
            </div>
        </div>
    );
}

export default EmotionalStoriesAdolescentPage; 