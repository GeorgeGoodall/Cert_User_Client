import React, {Component} from 'react';
import AlexHappy from "./james_happy.png";
import SpeechBubble from "../SpeechBubble/SpeechBubble.jsx";
import classes from "./AlexInfo.css";



class AlexInfo extends Component{
	constructor(props){
		super(props);
		this.state = ({"text":props.text});
	}

	render(){

		let alexFaceImage = AlexHappy;
		if(typeof this.props.alexFace != "undefined")
			alexFaceImage = this.props.alexFace;

		return (
			<div className={classes.alexInfo}>
				<div className={classes.alexInfoContainer}>
			    	<img className={classes.alexFace} src={alexFaceImage} key={alexFaceImage}/>
			    	<SpeechBubble maxWidth={this.props.maxWidth} text={this.state.text} key={this.props.slideNumber}/>
				</div>
			</div>
		);		
	}

}



export default AlexInfo;
