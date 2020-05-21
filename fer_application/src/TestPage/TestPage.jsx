import React, {useState} from 'react';
import axios from 'axios';

import TestQuestionPage from "../TestQuestionPage/TestQuestionPage.jsx";
import InformationPage from "../InformationPage/InformationPage";


import classes from "./TestPage.css";

import getTests, {language} from '../tasks.js';
import Button from '../Button/Button.jsx';

const images = {};
importAll(require.context('./images/', false, /\.(png|jpe?g|svg|mp4)$/));
function importAll(r) {
  return r.keys().forEach((key) => {
  	let k = key.substring(2); // remove the ./ from the start
  	images[k] = r(key)
  });
}

const TestPage = (props) => {
    const slides = getTests();

    console.log(slides);

    let _answersSubmitted = []
	for(let i = 0; i < slides.task_array.length; i++){
		_answersSubmitted.push(-1);	
	}

    let [slideNumber, setSlideNumber] = useState(0);
    let [answersSubmitted, setAnswersSubmitted] = useState(_answersSubmitted);

	const endTest = () => {

		const data = {
			sessionNumber: 0, 
			taskNumber: props.type == "Pretest" ? 1 : (props.type == "Posttest" ? 2 : 0), 
			taskName: props.type, 
			answersSubmitted
		}

		const result = axios.post("/user/submitTaskData", data)
		// navigate back to login page
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
				header: "Emotion recognition test",
				AlexSpeechBubble: "In this task, you will be presented with lots of different photos of people. I would like you tell me what emotion you think this person is showing out of 5 options: happy, sad, scared, angry or no emotion. You should choose 'no emotion' when you think the person isn't showing any emotion. It might be quite easy for some faces but for other faces it might be quite difficult. The task will start with 5 practice tries."
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
	
	const getOutroPage = () => {
		const currentSlide = {
			params: {
				header: "Outro page",
				AlexSpeechBubble: "speech test"
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
         
    const setAnswerForSlide = (slideIndex, answer) => {
		let temp = [...answersSubmitted];
		const answerCopy = JSON.parse(JSON.stringify(answer));
		temp[slideIndex] = [answerCopy];
		setAnswersSubmitted(temp);
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
