import React, {useEffect, useState} from 'react';
import Button from "../../Components/Button/Button.jsx";
import {Link} from 'react-router-dom'
import {language} from '../../config/tasks.js';

import classes from '../../Assets/css/globalStyles.css';
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"


const Home = ({sessionReached, setSession, setTest}) => {
	

	
	return (
		<div>
			<h1 className={getHeaderClass(language.pleaseSelectASession)}>{language.pleaseSelectASession}</h1>
			<div className={classes.taskList}>
				<Link to={sessionReached < 1 ? "/" : "/Session"} ><Button className={classes.menuButton} inactive={sessionReached < 1}  text={language.getSessionId(1)} onClickHandler={sessionReached < 1 ? () => {} : () => setSession(1)}/></Link>
				<Link to={sessionReached < 2 ? "/" : "/Session"} ><Button className={classes.menuButton} inactive={sessionReached < 2}  text={language.getSessionId(2)} onClickHandler={sessionReached < 2 ? () => {} : () => setSession(2)}/></Link>
				<Link to={sessionReached < 3 ? "/" : "/Session"} ><Button className={classes.menuButton} inactive={sessionReached < 3}  text={language.getSessionId(3)} onClickHandler={sessionReached < 3 ? () => {} : () => setSession(3)}/></Link>
			</div>
			<div>
				<Link to="/test" ><Button className={classes.menuButton}  text={language.pretest} onClickHandler={() => setTest("Pretest")}/></Link>
				<Link to="/test" ><Button className={classes.menuButton}  text={language.posttest} onClickHandler={() => setTest("Posttest")}/></Link>
			</div>
		</div>
	);		

}



export default Home;