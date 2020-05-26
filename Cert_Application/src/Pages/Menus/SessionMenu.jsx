import React from 'react';
import Button from "../../Components/Button/Button.jsx";
import {Link} from 'react-router-dom'
import {language} from '../../config/tasks.js';
import classes from '../../Assets/css/globalStyles.css';
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"


function SessionMenu(props){

	const {setTask, tasks, session, sessionReached, taskReached} = props;

	return (
		<div>
			<h1 className={getHeaderClass(language.getSessionMenuHeader(session))}>{language.getSessionMenuHeader(session)}</h1>
			<div className={classes.taskList}>
			{
				
				tasks.map((task, index)=>{
					const inactive = session > sessionReached || session == sessionReached && index > taskReached - 1;
					return (
						<Link key={task.index} to={inactive ? "/Session" : "/task"}>
							<Button text={task.name} className={classes.menuButton} onClickHandler={()=>setTask(task.index)} inactive={inactive}/>
						</Link>
					)
				})
			}
			</div>
			
		</div>
	);		

}



export default SessionMenu;