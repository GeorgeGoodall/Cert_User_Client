import React, {useState, useEffect} from 'react';
import Webcam from "react-webcam";
import Button from "../../Components/Button/Button.jsx";



import nl2br from 'react-newline-to-break';
import globalStyles from '../../Assets/css/globalStyles.css';
import classes from "./CopyTheFacePage.css";

import {language} from "../../config/tasks.js";
import {getHeaderClass, getSubHeaderClass} from "../../config/CSSTextClassBoundrys"


function CopyTheFacePage(props){

	let [imageSrc, setImageSrc] = useState(null);

	const {image, setCanProceed, currentSlide, webcamErrorCallback} = props;
	const webcamRef = React.useRef(null);
	

	const capture = () => {
	    imageSrc = webcamRef.current.getScreenshot();
	    setImageSrc(imageSrc);
	    setCanProceed(true);
	}

	const retake = () => {
		setImageSrc(null);
		setCanProceed(false);	
	}

	let button;
	if(imageSrc == null){
		button = <Button onClickHandler={() => capture()} text="Capture" />
	}
	else{
		button = <Button onClickHandler={() => retake()} text="Try again" />
	}

	const header = language.copyTheFaceHeader(imageSrc != null, currentSlide.params.person);

	


	return (
		<div>
			<h1 className={getHeaderClass(header)}>{header}</h1>
			<div className={classes.container}>
				<img src={image} className={classes.image}/>
				<div className={classes.webcamContainer} >
					<img src={imageSrc} style={{display: imageSrc == null ? "none" : "block"}}/>
					<Webcam 
						width="100%"
						audio={false}
						ref={webcamRef}
						style={{display: imageSrc != null ? "none" : "block"}}
						onUserMediaError={webcamErrorCallback}
					/>
				</div>
		    </div>
		    {button}
		</div>
	);
		

}



export default CopyTheFacePage;