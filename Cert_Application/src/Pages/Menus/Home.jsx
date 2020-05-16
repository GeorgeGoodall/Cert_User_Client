import React, {Component} from 'react';
import Button from "../../Components/Button/Button.jsx";
import {Link} from 'react-router-dom'
import {language} from '../../config/tasks.js';

import classes from '../../Assets/css/globalStyles.css';
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"

class Home extends Component{
	constructor(props){
		super(props);
	}

	


	render(){
		return (
			<div>
				<h1 className={getHeaderClass(language.pleaseSelectASession)}>{language.pleaseSelectASession}</h1>
				<div className={classes.taskList}>
				    <Link to="/Session" ><Button className={classes.menuButton}  text={language.getSessionId(1)} onClickHandler={() => this.props.setSession(1)}/></Link>
				    <Link to="/Session" ><Button className={classes.menuButton}  text={language.getSessionId(2)} onClickHandler={() => this.props.setSession(2)}/></Link>
				    <Link to="/Session" ><Button className={classes.menuButton}  text={language.getSessionId(3)} onClickHandler={() => this.props.setSession(3)}/></Link>
				</div>
			</div>
		);		
	}

}



export default Home;