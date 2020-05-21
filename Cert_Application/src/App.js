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

	async componentDidMount(){
		const authData = await axios.get('/checkCookies');
		if(authData.data.institution == null || authData.data.user == null){
			window.location.href = "/login"
		}
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


	  	return (
	  		<Router basename="/cert">
				<Switch>
					<Route path="/(|home|settings)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} windowSize={this.state.windowSize}/> } />
					<Route path="/(Session)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} session={session} windowSize={this.state.windowSize}/> } />
					<Route path="/(task)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} session={session} task={slides.name} windowSize={this.state.windowSize}/> } />
					<Route path="/(test)" component={() => <Header getTasks={this.getLatestTaskArray.bind(this)} windowSize={this.state.windowSize}/> } />
				</Switch>
			  	
			  	<div>
			  		<Switch>
			  			<Route path="/(home|)" component={()=> <Home setSession={this.setSession.bind(this)} setTask={this.setTask.bind(this)} setTest={this.setTest.bind(this)}/> } />
			  			<Route path="/Session" component={()=> <SessionMenu session={session} tasks={this.state.tasks[sessionId]} setTask={this.setTask.bind(this)} tests={this.tests}/> } />
			  			<Route path="/task" component={()=> <TaskPage slides={slides} sessionNumber={this.state.session} /> } />
						<Route path="/test" component={()=> <TestPage type={this.state.test}/>} />
						<Route path="/settings" component={()=> <Settings /> } />
			  		</Switch>
			  		
				</div>
			</Router>
	  	);
	}
}

export default App;
