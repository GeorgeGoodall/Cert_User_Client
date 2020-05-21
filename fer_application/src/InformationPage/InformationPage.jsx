import React, {Component} from 'react';
import AlexInfo from "../AlexInfo/AlexInfo.jsx";
import nl2br from 'react-newline-to-break';

import globalStyle from '../globalStyles.css';
import classes from './InformationPage.css';
import {getHeaderClass} from "../CSSTextClassBoundrys"

class InformationPage extends Component{
	constructor(props){
		super(props);
		let re = /<br>|<\/br>/gi;
		let header = props.currentSlide.params.header.replace(re,"\n");
		let text = props.currentSlide.params.AlexSpeechBubble.replace(re,"\n");
		this.state = ({
			"header": header,
			"text": text,
			"alexFace": props.alexImage,
			"loadSlide": props.loadSlide,
			"slideNumber": props.slideNumber,
			"slideCount": props.slideCount,
		})
	}


	componentWillReceiveProps(nextProps){

		console.log(nextProps)

		let re = /<br>|<\/br>/gi;
		let header = nextProps.currentSlide.params.header.replace(re,"\n");
		let text = nextProps.currentSlide.params.AlexSpeechBubble.replace(re,"\n");
		
		this.setState({
			"header": header,
			"text": text,
			"alexFace": nextProps.alexImage,
			"slideNumber": nextProps.slideNumber,
		})
	}

	changeSlide(nextSlideNumber){
		this.state.loadSlide(nextSlideNumber)
	}

	render(){

		let middleColumnStyle = {
			display: "flex",
			alignItems: "center"
		}

		let headerStyle = {
			textAlign: "center"
		}


		let size = 400;
		if(window.matchMedia('(max-width: 1200px)').matches){
			headerStyle.fontSize = "30px";
		}
		if(window.matchMedia('(max-height: 850px)').matches){
			headerStyle.fontSize = "20px";
			size = 280;
		}
		if(window.matchMedia('(max-width: 1000px)').matches){
			headerStyle.fontSize = "25px";
			size = 300;
		}
		if(window.matchMedia('(max-width: 440px)').matches){
			headerStyle.fontSize = "15px";
			size = 200;
		}
		if(window.matchMedia('(max-height: 800px)').matches){
			headerStyle.fontSize = "15px";
			size = 200;
		}
		if(window.matchMedia('(max-height: 500px)').matches){
			headerStyle.fontSize = "15px";
			size = 100;
		}

		const {header, text, loadSlide, slideNumber, slideCount, alexFace} = this.state;

		console.log(text)

		return (
			<React.Fragment>	
				<h1 className={getHeaderClass(header)}>{nl2br(header)}</h1>
				<AlexInfo text={text} slideNumber={slideNumber} alexFace={alexFace}/>
			</React.Fragment>
		);		
	}

}



export default InformationPage;