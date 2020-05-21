import React, {Component} from 'react';
import AlexHappy from "../../Assets/Images/james_happy.png";
import SpeechBubble from "../SpeechBubble/SpeechBubble.jsx";
import classes from "./AlexInfo.css";



class AlexInfo extends Component{
	constructor(props){
		super(props);
	}

	render(){

		let alexFaceImage = AlexHappy;
		if(typeof this.props.alexFace != "undefined")
			alexFaceImage = this.props.alexFace;

		return (
			<div className={classes.alexInfo}>
				<div className={classes.alexInfoContainer}>
			    	<img className={classes.alexFace} src={alexFaceImage} key={alexFaceImage}/>
			    	<SpeechBubble maxWidth={this.props.maxWidth} text={this.props.text} key={this.props.slideNumber}/>
				</div>
			</div>
		);		
	}

}



export default AlexInfo;
