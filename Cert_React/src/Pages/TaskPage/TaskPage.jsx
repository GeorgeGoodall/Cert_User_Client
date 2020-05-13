import React, {Component, useEffect, useRef, useState, useReducer, useMemo} from 'react';

// todo lazy load all thease
import InformationPage from "../InformationPage/InformationPage.jsx";
import AlexExample from "../AlexExample/AlexExample.jsx";
import HowDoTheyFeelPage from "../HowDoTheFeelPage/HowDoTheyFeelPage.jsx";
import ChooseTheEmotionPage from "../ChooseTheEmotion/ChooseTheEmotionPage.jsx";
import EmotionalExperience from "../EmotionalExperience/EmotionalExperience.jsx";
import EmotionalVideo from "../EmotionalVideo/EmotionalVideo.jsx";
import PartsOfTheFacePage from "../PartsOfTheFace/PartsOfTheFacePage.jsx";
import Session1ReviewPage from "../ReviewPages/Session1ReviewPage.jsx";
import Session2ReviewPage from "../ReviewPages/Session2ReviewPage.jsx";
import Session3ReviewPage from "../ReviewPages/Session3ReviewPage.jsx";
import QuizPage from "../QuizPage/QuizPage.jsx";
import QuizFeedbackPage from "../QuizPage/QuizFeedbackPage.jsx";
import CenterHowDoTheyFeelPage from "../CenterHowDoTheyFeelPage/CenterHowDoTheyFeelPage.jsx" 
import CopyTheFacePage from "../CopyTheFacePage/CopyTheFacePage.jsx";
import MakeAFacePage from "../MakeAFacePage/MakeAFacePage.jsx";
import EmotionStoryPage from "../EmotionStories/EmotionStoryPage.jsx";
import EmotionStoryAdolescentPage from "../EmotionStories/EmotionalStoriesAdolescentPage.jsx";
import TalkingToYourFriend from "../TalkingToYourFriend/TalkingToYourFriend.jsx";
import arrow from "../../Assets/Images/arrow.svg";
import classNames from 'classnames';

import AlexPopup from "../../Components/AlexPopup/AlexPopup.jsx";

import globalStyle from '../../Assets/css/globalStyles.css';
import { Redirect } from 'react-router-dom';

import {getEmotionStrings} from "../../config/tasks.js";
import {language} from "../../config/tasks.js";

import classes from "./TaskPage.css";

const images = {};
importAll(require.context('../../Assets/Images/BatchImport/', false, /\.(png|jpe?g|svg|mp4)$/));
function importAll(r) {
  return r.keys().forEach((key) => {
  	let k = key.substring(2); // remove the ./ from the start
  	images[k] = r(key)
  });
}

function TaskPage(props) {
	
	//#region state
	let _answersSubmitted = []
	for(let i = 0; i < props.slides.slides.length; i++){
		if(props.slides.name == "Quiz"){
			_answersSubmitted.push(-1);	
		}
		else{
			_answersSubmitted.push([]);
		}
	}

	

	let [answersSubmitted, setAnswersSubmitted] = useState(_answersSubmitted);
	let [slideNumber, setSlideNumber] = useState(0);
	let [canProceed, setCanProceed] = useState(true);
	let [slideReached, setSlideReached] = useState(0);
	let [shouldRedirect, setShouldRedirect] = useState(false);
	let stream = null;
	
	const {slides} = props;

	//#endregion

	

	let webcamAlertRef = useRef();
	
	let emotionsUsed = [];

	const webcamError = (error = null) => {
		console.log(error);
		webcamAlertRef.current.openAlerts(true);
		setCanProceed(false);
		setShouldRedirect(true);
	}
	
	useEffect(() => {
		if(slides.requiresWebcam){
			try { // Attempts to link to webcam and display webcam image on the webcam_display video
				console.log("trying to get webcam");
			   if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) { 
				   
				   navigator.mediaDevices.getUserMedia({video: true})
				   .then((_stream) => {
					   	console.log("sucess");
						stream = _stream;   
				   })
				  .catch(function(error) { 
						webcamError(error);
						setCanProceed(false);
				   });
			   }
		   } catch(err){ // If failed displays denied alert
			   console.log(err);
			   webcamAlertRef.current.openAlerts(true);
			   setCanProceed(false);
			   setShouldRedirect(true);
		   }
		   
		}
	
		document.addEventListener("keyup", _handleKeyUp);

	   	return () => {
			document.removeEventListener("keyup", _handleKeyUp);
	   	}
	});

	const _handleKeyUp = (event) => {
		console.log("keyPress");
		
		switch(event.keyCode){
			case 37:
				loadSlide(-1);
				break;
			case 39:
				loadSlide(1);
				break
			case 38:
				console.log(answersSubmitted);
				break
			default:
				break; 
		}
	}

	const pushAnswerForSlide = (slideIndex, answer) => {
		let temp = [...answersSubmitted];
		console.log(temp);
		temp[slideIndex].push(answer);
		setAnswersSubmitted(temp);
	}

	const setAnswerForSlide = (slideIndex, answer) => {
		let temp = [...answersSubmitted];
		temp[slideIndex] = answer;
		setAnswersSubmitted(temp);
	}

	const submitAnswer = async(slideIndex, answerIndex) => {

		const {correctAnswer, emotion, answers} = slides.slides[slideIndex].params;
		pushAnswerForSlide(slideIndex, answerIndex);

		if(answerIndex == correctAnswer || (typeof answers == "undefined" && answerIndex == getEmotionStrings(true).indexOf(emotion))){
			setCanProceed(true);
			setSlideReached(slideNumber+1);
			return true;
		}
		return false;
		
		// post data to server here
	}

	const setAnswer = (slideIndex, answerIndex, _canProceed = true) => {

		setAnswerForSlide(slideIndex, answerIndex);
		setCanProceed(_canProceed);
		setSlideReached(slideNumber+1);
		// post data to server here
	}

	const submitVideoAnswer = async(slideIndex, answerIndex, videoTime) => {
		console.time("SubmitAnswer");

		pushAnswerForSlide(slideIndex, [answerIndex, videoTime]);

		if(answerIndex == getEmotionStrings().indexOf(slides.slides[slideIndex].params.emotion)){
			setCanProceed(true);
			setSlideReached(slideNumber+1);
		}
		return canProceed;
	}

	const submitTextAnswer = (slideIndex, answer) => {
		
		setAnswerForSlide(slideIndex, answer);
		let _canProceed = false;
		if(Array.isArray(answer))
			_canProceed = typeof answer[answer.length-1] == "string" && answer[answer.length-1].length > 0;
		else
			_canProceed = answer.length > 0;
		setCanProceed(_canProceed);
		if(_canProceed)
			setSlideReached(slideNumber+1);
		
	}

	const loadSlide = (deltaIndex) => {
		let _slideNumber = Math.max(0,slideNumber + deltaIndex);
		console.log(canProceed, deltaIndex, slideReached, _slideNumber);
		if(_slideNumber > slides.slides.length){
			return;
		}
		else if(canProceed || deltaIndex < 0 || slideReached >= _slideNumber){
			setSlideNumber(_slideNumber);
			let _slideReached = Math.max(_slideNumber, slideReached);
			setSlideReached(_slideReached);
			setCanProceed(typeof slides.slides[_slideNumber] == "undefined" || !(slides.slides[_slideNumber].params.requiresInput && _slideNumber == _slideReached));
		}
	}

	const getPage = (_slideNumber = null) => {

		let slideHidden = true;
		if(_slideNumber != null){
			if(slideNumber == _slideNumber)
				slideHidden = false;
		}
		else
			_slideNumber = slideNumber;

		const answersSubmittedThisSlide = answersSubmitted[slideNumber];

		let currentSlide = JSON.parse(JSON.stringify(slides.slides[_slideNumber])); // make it a copy
		let slideType = currentSlide.type;
		let currentPage;

		if(slideType == "InformationPage"){
			currentPage = 	<InformationPage 
								currentSlide={currentSlide}
								alexImage={images[currentSlide.params.AlexImage]}
								loadSlide={loadSlide}
								slideNumber={_slideNumber}
							/>
		}
		else if(slideType == "InformationPageWithPicture"){
			currentPage = 	<AlexExample
								currentSlide={currentSlide}
								exampleImage={images[currentSlide.params.exampleImage]}
								alexImage={images[currentSlide.params.AlexImage]}
								slideNumber={_slideNumber}
							/>
		}
		else if(slideType == "HowDoTheyFeelPage"){

			const {person, emotion} = currentSlide.params;

			let image;
			if(typeof currentSlide.params.image != "undefined")
				image = images[currentSlide.params.image];
			else
				image = images[person + "_" + emotion + ".jpg"];

			currentPage = 	<HowDoTheyFeelPage
								currentSlide={currentSlide}
								image={image}
								alexImage={images[currentSlide.params.AlexImage]}
								slideNumber={_slideNumber}
								submitAnswer={submitAnswer}
								answersSubmitted={answersSubmittedThisSlide}
							/>
		}
		else if(slideType == "ChooseTheEmotion"){

			currentSlide.params.options.forEach((option, i, options) => {
				let imageName = option[0] + "_" + option[1] + ".jpg";
				option.push(images[imageName]);
				options[i] = option;
			});
			
			currentPage = 	<ChooseTheEmotionPage
								currentSlide={currentSlide}
								slideNumber={_slideNumber}
								submitAnswer={submitAnswer}
								answersSubmitted={answersSubmittedThisSlide}
							/>
		}
		else if(slideType == "EmotionStory"){

			currentSlide.params.options.forEach((option, i, options) => {
				let imageName = option[0] + "_" + option[1] + ".jpg";
				option.push(images[imageName]);
				options[i] = option;
			});
			currentPage = 	<EmotionStoryPage
								currentSlide={currentSlide}
								slideNumber={_slideNumber}
								submitAnswer={submitAnswer}
								answersSubmitted={answersSubmittedThisSlide}
							/>
		}
		else if(slideType == "EmotionStoryAdolescent"){

			currentPage = 	<EmotionStoryAdolescentPage
								currentSlide={currentSlide}
								slideNumber={_slideNumber}
								setAnswer={setAnswer}
								answersSubmitted={answersSubmittedThisSlide}
							/>
		}
		else if(slideType == "EmotionalExperiencePage"){
			
			let repeatEmotion = false;
			if(emotionsUsed.indexOf(currentSlide.params.emotion) > -1){
				repeatEmotion = true;
			}else{
				emotionsUsed.push(currentSlide.params.emotion);
			}

			const {name, emotion} = currentSlide.params;

			let image = images[name + "_" + emotion + ".jpg"];

			currentPage = 	<EmotionalExperience 
								repeatEmotion={repeatEmotion}
								currentSlide={currentSlide}
								image={image}
								slideNumber={_slideNumber}
								submitAnswer={submitTextAnswer}
								answerSubmitted={answersSubmittedThisSlide}
							/>
		}
		else if(slideType == "EmotionalVideo"){

			const {name, emotion} = currentSlide.params;
			let video = images[name+"_"+emotion+".mp4"];
			let image = images[name+"_"+emotion+".jpg"];

			currentPage = 	<EmotionalVideo
								currentSlide={currentSlide}
								video={video}
								image={image}
								answersSubmitted={answersSubmittedThisSlide}
								slideNumber={_slideNumber}
								submitAnswer={submitVideoAnswer}
								key={_slideNumber}
							/>
		}
		else if(slideType == "PartsOfTheFacePage"){

			const {people, emotion} = currentSlide.params;
			let _images = [images[people[0]+"_"+emotion+".jpg"],images[people[1]+"_"+emotion+".jpg"]];

			currentPage = 	<PartsOfTheFacePage
								currentSlide={currentSlide}
								images={_images}
								answersSubmitted={answersSubmittedThisSlide}
								slideNumber={_slideNumber}
								submitAnswer={submitAnswer}
								key={_slideNumber}
							/>
		}
		else if(slideType == "talkingToYourFriends"){

			const {name, emotion} = currentSlide.params;
			let image = images[name+"_"+emotion+".jpg"];

			currentPage = 	<TalkingToYourFriend
								currentSlide={currentSlide}
								image={image}
								slideNumber={_slideNumber}
								submitAnswer={submitTextAnswer}
								answerSubmitted={answersSubmittedThisSlide}
							/>
							
		}
		else if(slideType == "talkingToYourFriendsMultiChoice"){

			const {name, emotion} = currentSlide.params;
			let image = images[name+"_"+emotion+".jpg"];

			currentPage = 	<TalkingToYourFriend
								currentSlide={currentSlide}
								image={image}
								multiChoice={true}
								slideNumber={_slideNumber}
								submitAnswer={submitAnswer}
								answerSubmitted={answersSubmittedThisSlide}
							/>
			
		}
		else if(slideType == "Session1ReviewPage"){

			const {emotion, person} = currentSlide.params;

			const image = images[person+"_"+emotion+".jpg"];

			const answerText = "temporary answer, need to decide how data shall be stored";

			currentPage = 	<Session1ReviewPage
								currentSlide={currentSlide}
								image={image}
								answerText={answerText}
								slideNumber={_slideNumber}
								key={_slideNumber}
							/>
		}
		else if(slideType == "Session2ReviewPage"){

			const {emotion, person} = currentSlide.params;

			const image = images[person+"_"+emotion+".jpg"];

			currentPage = 	<Session2ReviewPage
								currentSlide={currentSlide}
								emotion={emotion}
								person={person}
								image={image}
								key={_slideNumber}
							/>
		}
		else if(slideType == "Session3ReviewPage"){
			const {emotion, person} = currentSlide.params;
			const image = images[person+"_"+emotion+".jpg"];
			currentPage = 	<Session3ReviewPage
				image={image}
				person={person}
				emotion={emotion}
			/>
		}
		else if(slideType == "QuizPage"){

			const {emotion, person} = currentSlide.params;

			const image = images[person+"_"+emotion+".jpg"];

			currentPage = 	<QuizPage
								currentSlide={currentSlide}
								slideNumber={_slideNumber}
								answersSubmitted={answersSubmittedThisSlide}
								submitAnswer={setAnswer}
							/>
		}
		else if(slideType == "CopyTheFacePage"){

			const {emotion, person} = currentSlide.params;
			const image = images[person+"_"+emotion+".jpg"];

			currentPage = 	<CopyTheFacePage
								currentSlide={currentSlide}
								image={image}
								setCanProceed={setCanProceed}
								webcamErrorCallback={webcamError}
							/>
		}
		else if(slideType == "MakeAFace"){

			const {emotions, person} = currentSlide.params;

			let _images = [images[person + "_" + emotions[0] + ".jpg"],images[person + "_" + emotions[1] + ".jpg"]]

			currentPage = 	<MakeAFacePage
								currentSlide={currentSlide}
								slideNumber={_slideNumber}
								images={_images}
								submitAnswer={setAnswer}
								chosen={answersSubmittedThisSlide}
								key={_slideNumber}
							/>
		}
		else if(slideType == "ResultsPage"){

			const {emotion, person} = currentSlide.params;

			currentPage = 	<QuizFeedbackPage
								answersSubmitted={answersSubmitted}	
								slides={slides.slides}
							/>
		}
		else{
			currentPage = <h1>Page not found</h1>	
		}

		return currentPage;
	}

	
	console.time("render");

	// if you finish a task, return to the session menu
	if(slideNumber == slides.slides.length){
		return <Redirect to="/session" push />
	}

	let pages = [];
	for(let i = 0; i < slides.slides.length; i++){
		let p = getPage(i);
		pages = pages.concat(p);
	}
	let _canProceed = canProceed;

	console.log("**" + _canProceed);

	console.timeEnd("render");
	return (
		<div className={classes.page}>
			<img src={arrow} className={classNames({[globalStyle.arrow]: true, [globalStyle.inactive]: slideNumber == 0, [globalStyle.left] : true})}  onClick={() => loadSlide(-1)}/>
			<div className={classes.middleColumn}>
				{
					pages.map((page,key)=>{
						const temp = <div className={classes.pageContainer} style={slideNumber == key ? {display: "block"} : {display: "none"}} key={key}>{page}</div>
						
						return (temp);
					})
				}
			</div>
			<img src={arrow} className={classNames({[globalStyle.arrow]: true, [globalStyle.inactive]: (slideNumber == slides.slides.length || !_canProceed), [globalStyle.left] : false})} onClick={_canProceed ? () => loadSlide(+1) : () => {}}/>	
			<AlexPopup 
				ref={webcamAlertRef}
				redirectOnClose={shouldRedirect}
				correctText={language.webcamMessage}
				incorrectText={""}
			/>
		</div>
	);		

}

let propsAreEqual = (prevProps, nextProps) => {
	console.log("test");
	return true;
}

TaskPage = React.memo(TaskPage, propsAreEqual);

export default TaskPage;