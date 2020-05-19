import React, {useEffect, useState} from 'react';
import nl2br from 'react-newline-to-break';

import globalStyle from '../../Assets/css/globalStyles.css';
import classes from "./MakeAFacePage.css";

import templateSrc from "../../Assets/Images/template.png";



let header = "";

const MakeAFaceCanvas = React.memo( (props) => {

    let images = [new Image(),new Image()];

    images[0].src = props.images[0];
    images[1].src = props.images[1];

    let template = new Image();
    template.src = templateSrc;

    // images[0].onload = function() {
    //     draw_images();
    // }

    // images[1].onload = function() {
    //     draw_images();
    // }

    let scale = 0.4;
    
    var chosen = props.chosen;
    if(props.chosen.length == 0 || typeof props.chosen == "undefined")
        chosen = [null,null];

    let downEvent = null;
    let currentIndex = null;
    var mouse_x = 0;
    var mouse_y = 0;
    var positions = { // Current image positions
        top_left: "default",
        bottom_left: "default",
        top_right: "default",
        bottom_right: "default"
    };
    var canvas;
    var ctx;
    var position_values = { // Image positions on canvas
        rect_width : 0,
        rect_height : 0,
        top_middle_x : 0,
        top_middle_y : 0,
        bottom_middle_x : 0,
        bottom_middle_y : 0,
        top_left_x : 0,
        top_left_y : 0,
        bottom_left_x : 0,
        bottom_left_y : 0,
        top_right_x : 0,
        top_right_y : 0,
        bottom_right_x : 0,
        bottom_right_y : 0
    };


	useEffect(()=>{
        canvas = document.getElementById("game_canvas_"+props.slideNumber);
		ctx = canvas.getContext("2d");

        
        canvas.addEventListener("mousedown", downEvents);
        canvas.addEventListener("touchstart", downEvents); 
        canvas.addEventListener("mousemove", moveEvents);
        canvas.addEventListener("touchmove", moveEvents);


        draw_images();
        
        // return runs on component unmount
        return () => {
            canvas.removeEventListener("mousedown", downEvents);
            canvas.removeEventListener("touchstart", downEvents);
            canvas.removeEventListener("mousemove", moveEvents);
            canvas.removeEventListener("touchmove", moveEvents);
        }
	})

    function getMousePosFromEvent(e){
        var canvas_position = canvas.getBoundingClientRect();
        let {clientX, clientY} = e;

        
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(typeof e.targetTouches != "undefined" && typeof e.targetTouches[0] != "undefined"){
                const {pageX, pageY} = e.targetTouches[0];
                clientX = pageX;
                clientY = pageY;        
            }
            else if(typeof e.changedTouches != "undefined" && typeof e.changedTouches[0] != "undefined"){
                const {pageX, pageY} = e.changedTouches[0];
                clientX = pageX;
                clientY = pageY;        
            }
        }

        return [
            (clientX - canvas_position.left) * 1000 / canvas_position.width, 
            (clientY - canvas_position.top) * 1000 / canvas_position.height
        ];
    }

    function moveEvents(e){ // Called on moouse movement events. Gets mouse positions on canvas and draws images. 
        let mousePos = getMousePosFromEvent(e);
        let {naturalWidth, naturalHeight} = images[0];
        naturalHeight = naturalHeight * scale;
        naturalWidth = naturalWidth * scale;
        
        if(mousePos[0] < naturalWidth && mousePos[1] < naturalHeight/2){
            draw_images(0);
        }
        else if(mousePos[0] > 1000 - naturalWidth  && mousePos[1] < naturalHeight/2){
            draw_images(1);
        }
        else if(mousePos[0] < naturalWidth && mousePos[1] > 1000 - naturalHeight/2){
            draw_images(2);
        }
        else if(mousePos[0] > 1000 - naturalWidth && mousePos[1] > 1000 - naturalHeight/2){
            draw_images(3);
        } else {
            draw_images();
        }
    }

    function afterMouseDown(e){
        const mousePos = getMousePosFromEvent(e);
        let {naturalWidth, naturalHeight} = images[0];
        naturalHeight = naturalHeight * scale;
        naturalWidth = naturalWidth * scale;
        const imagePosition = [mousePos[0]-naturalWidth/2,mousePos[1]-naturalHeight/4];
        draw_images(null, currentIndex, imagePosition);
    }

    function createEventsAfterMouseDown(e){
        canvas.removeEventListener("mousemove", moveEvents);
        canvas.addEventListener("mousemove", afterMouseDown);
        window.addEventListener("mouseup", upEvents);
        canvas.removeEventListener("touchmove", moveEvents);
        canvas.addEventListener("touchmove", afterMouseDown);
        window.addEventListener("touchend", upEvents);
        afterMouseDown(e)
    }

	function downEvents(e){ // Called when the left mouse buttom is held down. Changes image position to "mouse" if the mouse is held down over the image and updates the canvas.   
        let mousePos = getMousePosFromEvent(e);

        let {naturalWidth, naturalHeight} = images[0];
        naturalWidth *= scale;
        naturalHeight *= scale;

        downEvent = e;

        if(mousePos[0] < naturalWidth && mousePos[1] < naturalHeight/2){
            currentIndex = 0;
            createEventsAfterMouseDown(e);
        }
        else if(mousePos[0] > 1000 - naturalWidth  && mousePos[1] < naturalHeight/2){
            currentIndex = 1;
            createEventsAfterMouseDown(e);
        }
        else if(mousePos[0] < naturalWidth && mousePos[1] > 1000 - naturalHeight/2){
            currentIndex = 2;
            createEventsAfterMouseDown(e);
        }
        else if(mousePos[0] > 1000 - naturalWidth && mousePos[1] > 1000 - naturalHeight/2){
            currentIndex = 3;
            createEventsAfterMouseDown(e);
        }
        else if(mousePos[0] > 500 - naturalWidth / 2 && mousePos[0] < 500 + naturalWidth / 2 && mousePos[1] < 500 && mousePos[1] > 500 - naturalHeight / 2){
            currentIndex = 4;
            createEventsAfterMouseDown(e);
        }               
        else if(mousePos[0] > 500 - naturalWidth / 2 && mousePos[0] < 500 + naturalWidth / 2 && mousePos[1] > 500 && mousePos[1] < 500 + naturalHeight / 2){
            currentIndex = 5;
            createEventsAfterMouseDown(e);
        }
    }

    function upEvents(e){
        let mousePos = getMousePosFromEvent(e);
        let {naturalWidth, naturalHeight} = images[0];
        naturalWidth *= scale;
        naturalHeight *= scale;

        if(mousePos[0] > 500 - naturalWidth / 2 && mousePos[0] < 500 + naturalWidth / 2 && mousePos[1] < 500 + naturalHeight / 2 && mousePos[1] > 500 - naturalHeight / 2){
            if(currentIndex > 3){
                currentIndex = chosen[currentIndex-4];
            }
            if(currentIndex < 2)
                chosen[0] = currentIndex;
            else
                chosen[1] = currentIndex;
        }
        else{
            if(currentIndex > 3){
                currentIndex = chosen[currentIndex-4];
            }

            let cIndex = chosen.indexOf(currentIndex);
            if(cIndex != -1){
                chosen[cIndex] = null;
            }
        }


        window.removeEventListener("mouseup", upEvents);
        canvas.removeEventListener("mousemove", afterMouseDown);
        canvas.addEventListener("mousemove", moveEvents);

        window.removeEventListener("touchend", upEvents);
        canvas.removeEventListener("touchmove", afterMouseDown);
        canvas.addEventListener("touchmove", moveEvents);

        draw_images();
        checkFinished();
    }

    function checkFinished(){
        let correct = false;

        if(typeof props.answer == "undefined"){
            if(
                (typeof props.flipped == "undefined" || !props.flipped) 
                && ((chosen.indexOf(0) > -1 && chosen.indexOf(2) > -1) || (chosen.indexOf(1) > -1 && chosen.indexOf(3) > -1))

                || (props.flipped) 
                && ((chosen.indexOf(0) > -1 && chosen.indexOf(3) > -1) || (chosen.indexOf(1) > -1 && chosen.indexOf(2) > -1)))
            {
                correct = true;
            }
        }

        else {
            if(props.answer == 0){
                if(
                    ((typeof props.flipped == "undefined" || !props.flipped) && chosen.indexOf(0) > -1 && chosen.indexOf(2) > -1)
                    || (props.flipped) && (chosen.indexOf(0) > -1 && chosen.indexOf(3) > -1))
                {
                    correct = true;
                }
            }
            else if(props.answer == 1){
                if(
                    ((typeof props.flipped == "undefined" || !props.flipped) && chosen.indexOf(1) > -1 && chosen.indexOf(3) > -1)
                    || (props.flipped) && (chosen.indexOf(1) > -1 && chosen.indexOf(2) > -1))
                {
                    correct = true;
                }
            }
        }

        if(correct)
            props.answered(true,chosen);
        else
            props.answered(false,chosen);
    }

    function draw_images(hovering = null, selected = null, selectedPos = null){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
 
        let margin = 20;

        let templateWidth = images[0].naturalWidth * scale;
        let templateHeight = images[0].naturalHeight * scale;

        if(selected > 3){
            selected = chosen[selected-4];
        }

        // draw center template
        ctx.globalAlpha = 1;
        ctx.drawImage(
            template,
            500-templateWidth/2 , 500-templateHeight/2, templateWidth, templateHeight
        );    

        const {naturalWidth, naturalHeight} = images[0];
        let cropStartX = 0;
        let cropHeight = naturalHeight/2;
        let cropWidth = naturalWidth;

        let width = scale*naturalWidth;
        let height = scale*naturalHeight/2;



        // draw face sections
        for(let i = 0; i < 4; i++){

            let bottomOfFace = 0
            if(i > 1)
                bottomOfFace = 1

            let currentIndex = i%2;
            let row = Math.floor(i / 2);
            let column = i%2;

        
            if(props.flipped && row == 1){
                currentIndex = (column == 0 ? 1 : 0);
            }




            let cropStartY = bottomOfFace*naturalHeight/2;
            let xPosition = column == 0 ? 0 : 1000 - scale*naturalWidth;
            let yPosition = row == 0 ? 0 : 1000 - scale*naturalHeight/2;


            if(i == hovering){
                ctx.globalAlpha = 1;
            }
            else{
                ctx.globalAlpha = 0.8;   
            }


            if(chosen.indexOf(i) > -1){
                ctx.globalAlpha = 1;
                xPosition = 500 - naturalWidth*scale/2
                if(row == 0){
                    yPosition = 500 - scale*naturalHeight/2
                }else{
                    yPosition = 500
                }
            }

            if(i != selected){
                ctx.drawImage(
                    images[currentIndex],
                    cropStartX, cropStartY, cropWidth, cropHeight,
                    xPosition, yPosition, width, height
                );   
            }
            ctx.restore();         
        }
        if(selected != null && selected < 4 && selected >= 0){
            ctx.globalAlpha = 1;

            let bottomOfFace = 0
            if(selected > 1)
                bottomOfFace = 1

            if(props.flipped && bottomOfFace == 1){
                selected = (selected%2 == 0 ? 1 : 0);
            }

            let cropStartY = bottomOfFace*naturalHeight/2;

            ctx.drawImage(
                images[selected % 2],
                cropStartX, cropStartY, cropWidth, cropHeight,
                selectedPos[0], selectedPos[1], width, height
            );
        }
    }
	
	return (
    	<canvas id={'game_canvas_'+props.slideNumber} height='1000' width='1000'  className={classes.canvas} ></canvas>
	);
			

},
function arePropsEqual(prevProps, nextProps) { // second argument
    return prevProps.images[0] == nextProps.images[0];
});



export default MakeAFaceCanvas;