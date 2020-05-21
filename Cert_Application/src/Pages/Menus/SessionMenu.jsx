import React, {Component} from 'react';
import Button from "../../Components/Button/Button.jsx";
import {Link} from 'react-router-dom'
import {language} from '../../config/tasks.js';
import classes from '../../Assets/css/globalStyles.css';
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"

function SessionMenu(props){

	const {setTask, tasks, session} = props;

	

	return (
		<div>
			<h1 className={getHeaderClass(language.getSessionMenuHeader(session))}>{language.getSessionMenuHeader(session)}</h1>
			<div className={classes.taskList}>
			{
				
				tasks.map((task)=>{
					return (
						<Link key={task.index} to="/task">
							<Button text={task.name} className={classes.menuButton} onClickHandler={()=>setTask(task.index)}/>
						</Link>
					)
				})
			}
			</div>
			
		</div>
	);		

}



export default SessionMenu;