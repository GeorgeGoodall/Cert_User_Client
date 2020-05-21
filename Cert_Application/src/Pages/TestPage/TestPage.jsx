import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import TestQuestionPage from "../TestQuestionPage/TestQuestionPage.jsx";
import InformationPage from "../InformationPage/InformationPage.jsx";
import QuizFeedbackPage from "../QuizPage/QuizFeedbackPage.jsx";


import classes from "./TestPage.css";
import globalStyle from '../../Assets/css/globalStyles.css';
import arrow from "../../Assets/Images/arrow.svg";
import classNames from 'classnames';

import {getTests} from '../../config/tasks.js';
import Button from '../../Components/Button/Button.jsx';

const images = {};
importAll(require.context('../../Assets/Images/tests/', false, /\.(png|jpe?g|svg|mp4)$/));
function importAll(r) {
  return r.keys().forEach((key) => {
  	let k = key.substring(2); // remove the ./ from the start
  	images[k] = r(key)
  });
}

const TestPage = (props) => {
    const slides = getTests()[props.type];

    console.log(slides);

    let _answersSubmitted = []
	for(let i = 0; i < slides.task_array.length; i++){
		_answersSubmitted.push(-1);	
	}

    let [slideNumber, setSlideNumber] = useState(0);
    let [answersSubmitted, setAnswersSubmitted] = useState(_answersSubmitted);
	let [shouldRedirect, setShouldRedirect] = useState(false);

	const endTest = () => {

		const data = {
			sessionNumber: 0, 
			taskNumber: props.type == "Pretest" ? 1 : (props.type == "Posttest" ? 2 : 0), 
			taskName: props.type, 
			answersSubmitted
		}

		const result = axios.post("/user/submitTaskData", data)
		setShouldRedirect(true);
	}

    const nextSlide = () => {
		let _slideNumber = slideNumber;
		_slideNumber++;
		console.log(_slideNumber);
		
		if(_slideNumber >= pages.length){
			endTest();
		}
		else{
			setSlideNumber(_slideNumber);
		}
	}

    const getIntroPage = () => {
		
		const currentSlide = {
			params: {
				header: "header test",
				AlexSpeechBubble: "speech test"
			}
		}

		let currentPage = 	
			<React.Fragment>
				<InformationPage 
					currentSlide={currentSlide}	
				/>
				<Button onClickHandler={nextSlide} text={"Start"}/>
			</React.Fragment>
		

		return currentPage;
	}
	
	const [score, setscore] = useState(0);
	const getOutroPage = () => {
		const currentSlide = {
			params: {
				header: "",
				AlexSpeechBubble: "You have finished the test! Close this alert to return to the menu. \n\nYou scored: " + {score} + "%"
			}
		}

		let currentPage = 	
			<React.Fragment>
				<InformationPage 
					currentSlide={currentSlide}	
				/>
				<Button onClickHandler={nextSlide} text={"Return"}/>
			</React.Fragment>
		

		return currentPage;
	}
		
	let correct = 0;
    const setAnswerForSlide = (slideIndex, answer) => {
		let temp = [...answersSubmitted];
		const answerCopy = JSON.parse(JSON.stringify(answer));
		temp[slideIndex] = [answerCopy];
		setAnswersSubmitted(temp);
		if(answer.correct){
			correct++;
		}
		setscore(correct / (slides.task_array.length));

		nextSlide();
    }
    
    const getTestPage = (index) => {

        const {imageName, emotion} = slides.task_array[index];
        const image = images[imageName];
        const answersSubmittedThisSlide = answersSubmitted[index]

        let currentPage = 	<TestQuestionPage
                                slideNumber={index}
                                submitAnswer={setAnswerForSlide}
								image={image}
								emotion={emotion}
                            />

        return currentPage;
    }

	let pages = [];
	let p = getIntroPage();
	pages = pages.concat(p);
	for(let i = 0; i < slides.task_array.length; i++){
		p = getTestPage(i);
		pages = pages.concat(p);
	}
	p = getOutroPage();
	pages = pages.concat(p);
    
	
	if(shouldRedirect){
		return <Redirect to="/home" push />
	}

    return (
		<div className={classes.page}>
			<div className={classes.middleColumn}>
				{
					pages.map((page,key)=>{
						const temp = <div className={classes.pageContainer} style={slideNumber == key ? {display: "block"} : {display: "none"}} key={key}>{page}</div>
						return (temp);
					})
				}
			</div>
		</div>
	);		
}

export default TestPage;
