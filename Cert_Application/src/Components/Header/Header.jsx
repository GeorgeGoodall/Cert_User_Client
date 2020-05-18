import React, {Component} from 'react';
import Nav from '../Nav/Nav.jsx'
import UniLogo from '../uniLogo.jsx';
import classes from './Header.css';
import {Link} from 'react-router-dom'
import {language} from "../../config/tasks";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";




class Header extends Component{
	constructor(props){
		super(props);
		console.log(props.windowSize);
		this.state=({
			"task": props.task,
			"session": props.session,
			"headerActive": false,
			"wrapperRef":this,
		});

		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentWillReceiveProps(nextProps){
		console.log("update props")
		this.setState({
			"task": nextProps.task,
			"session": nextProps.session
		});
	}

	componentDidMount() {
	    document.addEventListener('mouseup', this.handleClickOutside);
	}

	componentWillUnmount() {
	    document.removeEventListener('mouseup', this.handleClickOutside);
	}

	handleClickOutside(event) {
	    if (!this.state.headActive && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
	      	this.setState({"headerActive":false});
	    }
	}

	setWrapperRef(node) {
	    this.wrapperRef = node;
	}

	render(){

		let title = "Cardiff Emotion Recognition Training (CERT)";

		let headerClassName;
		if(this.state.headerActive)
			headerClassName = classes.headerActive;
		else
			headerClassName = classes.header;

		let navButtonClassName;
		if(this.state.headerActive)
			navButtonClassName = classes.navDropDownButtonInActive;
		else
			navButtonClassName = classes.navDropDownButton;

		const {session, task} = this.state;

		let subHeader = (
			<React.Fragment>
				<div className={classes.pathLink}>
					<Link to="/home">{language.home}</Link>
				</div>
				<div className={classes.pathLink} style={{display: typeof session != "undefined" ? "block" : "none"}}>
					><Link to="/session">{language.getSessionId(session)}</Link>
				</div>
				<div className={classes.pathLink} style={{display: typeof task != "undefined" ? "block" : "none"}}>
					><Link to="/task">{task}</Link>
				</div>
			</React.Fragment>
		)

		

		return (
			<React.Fragment>
				<div ref={this.setWrapperRef} className={headerClassName}>
				    <Nav session={session} task={task} getTasks={this.props.getTasks}/>
				    {/* <div className={classes.banner}>
					    <UniLogo className={classes.logo}/>
					    <div>
					    <h1 className={classes.siteTitle}>{title}</h1>
						<h2 className={classes.pageTitle}>{subHeader}</h2>
					    </div>
						<div className={navButtonClassName} onClick={()=>{this.setState({"headerActive":true})}}></div>
					</div> */}
				</div>
			</React.Fragment>
		);		
	}

}



export default Header;