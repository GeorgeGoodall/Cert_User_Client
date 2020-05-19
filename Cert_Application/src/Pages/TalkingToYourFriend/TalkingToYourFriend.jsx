import React, {useState, useRef} from 'react';
import {language} from '../../config/tasks'
import classes from './TalkingToYourFriend.css'
import AnswerSection from "../../Components/AnswerSection/AnswerSection";
import AlexPopup from "../../Components/AlexPopup/AlexPopup";
import Button from "../../Components/Button/Button"

const TalkingToYourFriend = (props) => {

    
    const {currentSlide, image, submitAnswer, slideNumber, answerSubmitted, multiChoice} = props;
    const {name, emotion, answers, correctAnswer} = currentSlide.params;
    
    let [text, setText] = useState(answerSubmitted[0]);    
    let [text2, setText2] = useState(answerSubmitted[1]);

    let title = language.getPersonIsEmotionWhatShouldYouDo(name, emotion);

    let alexPopupRef = useRef();
    let alexHelpRef = useRef();

    const onChangeCallback = (event, textBoxId) => {
        if(textBoxId == 1){
            setText(event.target.value);
            const answerObject = {
                answerIndex: [event.target.value,text2],
                answerText: null,
            }
            submitAnswer(slideNumber,answerObject)
        }
        else{
            setText2(event.target.value);
            const answerObject = {
                answerIndex: [text,event.target.value],
                answerText: null,
            }
            submitAnswer(slideNumber,answerObject)
        }
		
    }

    const onClickCallback = async (answer) => {
        const answerObject = {
            answerIndex: answer,
            answerText: answers[answer], // ToDo: this need to be in english, but currently in selected language
        }
        alexPopupRef.current.openAlerts(await submitAnswer(slideNumber, answerObject));
    }
    
    
    
    let rightArea;
    let rightArea2;
    if(multiChoice){
        let _answers = [];
        answers.forEach((answer, key) => {
            let _answer = {
                text: answer,
                onClickHandler: ()=>onClickCallback(key),
                key: key,
                selected: key == correctAnswer && answerSubmitted.indexOf(key) > -1,
                inactive: answerSubmitted.indexOf(key) > -1 || answerSubmitted.indexOf(correctAnswer) > -1, 
            };
            _answers.push(_answer);
        });

        rightArea = <AnswerSection answers={_answers} containerClassName={classes.answerSection} className={classes.button}/>;
    }
    else{
        rightArea = (<textarea onChange={(e) => onChangeCallback(e,1)} id="textEntry" type="text" className={classes.textArea} value={text}></textarea>);
        if(typeof text != "undefined" && text.length > 0){
            rightArea2 = (
                <React.Fragment>
                    <h1 className={classes.whatElseCouldYouDo}>{language.whatElseCouldYouDo}</h1>
                    <textarea onChange={(e) => onChangeCallback(e,2)} id="textEntry" type="text" className={classes.textArea} value={text2}></textarea>
                </React.Fragment>
            )
        }
    }

    return (
        <div>
            <h1 className={classes.header}>{title}</h1>
			<div className={classes.middleColumn}>
				<img src={image} className={classes.image}/>
                <div className={classes.rightArea}>
                    {rightArea}
                    {rightArea2}
                </div>
			</div>
            <div style={{display: multiChoice && answerSubmitted.length > 0 ? "block" : "none"}}>
                <Button className={classes.helpButton} text={language.help} onClickHandler={() => alexHelpRef.current.openAlerts(true)}/>
            </div>
            <AlexPopup
				ref={alexPopupRef}
				correctText={language.talkingToFriendCorrectFeedback[emotion]}
				incorrectText={language.talkingToFriendIncorrectFeedback[emotion]}
			/>
            <AlexPopup
				ref={alexHelpRef}
				correctText={language.getTalkingToFriendHelp(name,emotion)}
				incorrectText={""}
			/>
        </div>
    );
}

export default TalkingToYourFriend;
