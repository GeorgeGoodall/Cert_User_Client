import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'

import getTasks, {getTests} from "./config/tasks.js"

import Header from "./Components/Header/Header.jsx";
import TaskPage from "./Pages/TaskPage/TaskPage.jsx";
import TestPage from "./Pages/TestPage/TestPage.jsx";
import SessionMenu from "./Pages/Menus/SessionMenu.jsx";
import Home from "./Pages/Menus/Home.jsx";
import Settings from "./Pages/SettingsPage/Settings";

import "./Assets/css/globalStyles.css";

import {setAgeType, getAgeType} from "./config/language";

require('dotenv').config();

function saveStateToStorage(state){
	
	try {
		localStorage.setItem('session', state.session);
		localStorage.setItem('task', state.task);
	} catch (e){
		console.log(e);
	}
}

class App extends Component{

	constructor(props){
		super(props);
		this.tests = getTests();

		let windowWidth = typeof window !== "undefined" ? window.outerWidth : 0;
	    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

		this.state = ({
			"session":localStorage.getItem('session') != null ? localStorage.getItem('session') : 1,
			"task":localStorage.getItem('task') != null ? localStorage.getItem('task') : 0,
			"sessionReached":1,
			"taskReached":1,
			"test": localStorage.getItem('test') != null ? localStorage.getItem('test') : "Pretest",
			"Language": localStorage.getItem('language') != null ? localStorage.getItem('language') : "English",
			"tasks":getTasks(),
		});

		window.addEventListener("beforeunload",(function(event)
		{
			saveStateToStorage(this.state);
			return "are you sure";
		}).bind(this));

	}

	async getProgress(){
		try{
			const result = await axios.get('user/getProgress');
			const {sessionNumber, taskNumber} = result.data.data[0] || {sessionNumber: 1, taskNumber: 1};
			this.setState(()=>{
				return {
					sessionReached: sessionNumber || 1,  
					taskReached: taskNumber || 1
				}
			})
		}
		catch(error){
			console.error(error);
			alert("Could not load your progress from the server")
			
		}
	}

	async incrementProgress(){
		const {task,taskReached,sessionReached,session, tasks} = this.state;
		console.log(task,taskReached,sessionReached,session)
		if(task+1 != taskReached || sessionReached != session){
			return;
		}

		let nextSession = false;

		let newTaskNumber = taskReached + 1;
		let newSessionNumber = session;
		let sessionId = "Session"+session.toString();
		if(newTaskNumber >= tasks[sessionId].length){
			newTaskNumber=1;
			newSessionNumber++;
		}

		const data = {
			taskNumber: newTaskNumber,
			sessionNumber: newSessionNumber
		}

		axios.post('/user/changeProgress', data);
		
		this.setState(()=>{
			return {
				sessionReached: newSessionNumber || 1,  
				taskReached: newTaskNumber || 1
			}
		})
	}

	async componentDidMount(){
		const authData = await axios.get('/checkCookies');
		if(authData.data.institution == null || authData.data.user == null){
			window.location.href = "/login"
		}
		else{
			localStorage.setItem("username", authData.data.user.name)
			setAgeType(authData.data.user.ageType)
		}
	
		this.getProgress();
	}

	async getLatestTaskArray(){
		await this.setState((pastState)=>{
			let tasks = getTasks();
			return {tasks}
		})
	}


  	setSession(index) {
  		let session = index;
  		this.setState((pastState) => {
  			return {session}
  		});
  	}

  	setTask(index) {
  		let task = index;
  		this.setState((pastState) => {
  			return {task};
  		});
	}
	  
	setTest(index) {
		let test = index;
		this.setState((pastState) => {
			return {test};
		});
	}

	render(){

		let page = <SessionMenu />;
		if(this.state.page == "task"){
			page = 	<TaskPage 
						slides={this.state.currentSlides}
						sessionNumber={this.state.session}
					/>
		}

		let pageStyle = {
			padding: "0 10%",
		}

		if(window.matchMedia('(max-width: 600px)').matches){
			pageStyle.padding = "0 2%";
		}

		const {session,task} = this.state;

		let sessionId = "Session"+session.toString();

		let slides = this.state.tasks[sessionId][task];

		console.log("render")

		const baseName = process.env.REACT_APP_BASE_NAME;

	  	return (
	  		<Router basename={baseName}>
				<Switch>
					<Route path="/(|home|settings)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} windowSize={this.state.windowSize}/> } />
					<Route path="/(Session)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} session={session} windowSize={this.state.windowSize}/> } />
					<Route path="/(task)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} session={session} task={slides.name} windowSize={this.state.windowSize}/> } />
					<Route path="/(test)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} windowSize={this.state.windowSize}/> } />
				</Switch>
			  	
			  	<div>
			  		<Switch>
			  			<Route path="/(home|)" component={()=> <Home setSession={this.setSession.bind(this)} setTask={this.setTask.bind(this)} setTest={this.setTest.bind(this)} sessionReached={this.state.sessionReached}/> } />
			  			<Route path="/Session" component={()=> <SessionMenu session={session} tasks={this.state.tasks[sessionId]} setTask={this.setTask.bind(this)} tests={this.tests} sessionReached={this.state.sessionReached} taskReached={this.state.taskReached} /> } />
			  			<Route path="/task" component={()=> <TaskPage slides={slides} sessionNumber={this.state.session} incrementProgress={this.incrementProgress.bind(this)}/> } />
						<Route path="/test" component={()=> <TestPage type={this.state.test}/>} />
						<Route path="/settings" component={()=> <Settings /> } />
			  		</Switch>
			  		
				</div>
			</Router>
	  	);
	}
}

export default App;
