
import React, {useState, useRef} from 'react';
import classes from "./Nav.css";
import {Link} from 'react-router-dom'
import {language} from '../../config/tasks'
import Sidebar from "../Sidebar/Sidebar"
import {FaBars, FaArrowLeft} from "react-icons/fa"
import nl2br from 'react-newline-to-break';

 
import "./Nav.css";

function Nav(props) {
	
	var isMobile = window.matchMedia("(max-width: 600px)");

	let sideBarRef = useRef();

	const setSidebarOpen = (status) => {
		sideBarRef.current.setSideBar(status)
	}
	
	const getPageTitle = (isMobile) => {
		if(isMobile.matches)
			return "Cardiff Emotion \n Recognition Training";
		else
			return "Cardiff Emotion Recognition Training";
	}
	
	let [pageTitle, setPageTitle] = useState(getPageTitle(isMobile));

	isMobile.addListener((isMobile)=>setPageTitle(getPageTitle(isMobile)));

	const backLink = () => {
		if(typeof props.session != "undefined" && typeof props.task == "undefined"){
			return "/home";
		}else if(typeof props.task != "undefined" && typeof props.task != "undefined"){
			return "/session";
		}else{
			return "";
		}
	}

	const atHome = () => {
		if(typeof session != "undefined" && typeof task != "undefined"){
			return true;
		}
		return false;
	}
	

	return (
		<React.Fragment>
			
			<nav className={classes.nav}>
				<ul className={classes.navArea}>
					<div className={classes.backArea} style={atHome() ? {display: "none"} : {display: "block"}}>
						<Link to={backLink()}>
							<FaArrowLeft className={classes.navItem}/>
						</Link>
					</div>
					<h1 className={classes.navHeader}>{nl2br(pageTitle)}</h1>
					<FaBars className={classes.navItem} onClick={() => setSidebarOpen(true)}/>
				</ul>
			</nav>
			<Sidebar ref={sideBarRef} session={props.session} task={props.task} getTasks={props.getTasks}/>
			
		</React.Fragment>
	);		
}



export default Nav;
